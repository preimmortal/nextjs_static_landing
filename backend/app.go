package main

import (
	"encoding/json"
	"net/http"
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/gorilla/mux"
)

type App struct {
	Router *mux.Router
	Server *http.Server
	DB     *Database
}

// Construct
func (a *App) Init(dbname string) {
	log.Info("Starting Application")

	// Initialize DB
	db := NewDB(dbname)
	a.DB = db

	// Initialize Router
	r := mux.NewRouter()
	//r.Host("https://davidlau.tech/")
	r.HandleFunc("/", a.HomeHandler).Methods("GET")
	r.HandleFunc("/contact", a.ContactHandler).Methods("POST")
	r.HandleFunc("/list", a.ListContactMessages).Methods("GET")
	a.Router = r
}

// Destruct
func (a *App) Stop() {
	a.DB.Close()
}

func (a *App) HomeHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("Home")
}

func (a *App) ContactHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var contact Contact
	var reply ContactReturn

	err := json.NewDecoder(r.Body).Decode(&contact)
	if err != nil {
		log.WithFields(log.Fields{
			"Error": err,
		}).Info("Could not verify contact")
		reply.Status = "Error - Please try again later"
		reply.Error = err.Error()
		json.NewEncoder(w).Encode(reply)
		return
	}

	err = verifyContact(&contact)
	if err != nil {
		log.WithFields(log.Fields{
			"Error": err,
		}).Info("Could not verify contact")
		reply.Status = "Error - Please try again later"
		reply.Error = err.Error()
		json.NewEncoder(w).Encode(reply)
		return
	}

	log.WithFields(log.Fields{
		"Request": r,
		"Contact": contact,
	}).Info("New Contact Request")

	err = a.DB.CreateContact(&contact)
	if err != nil {
		reply.Status = "Error - Please try again later"
		reply.Error = err.Error()
		json.NewEncoder(w).Encode(reply)
		return
	}
	reply.Status = "Success - Thank you for your message"
	reply.Error = ""
	json.NewEncoder(w).Encode(reply)
}

func (a *App) ListContactMessages(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var list List
	var reply ListReturn

	err := json.NewDecoder(r.Body).Decode(&list)
	if err != nil {
		log.WithFields(log.Fields{
			"Error": err,
		}).Info("Could not verify list")
		reply.Contacts = nil
		reply.Status = "Error - Please try again later"
		reply.Error = err.Error()
		json.NewEncoder(w).Encode(reply)
		return
	}

	if list.Secret != "pre" {
		log.WithFields(log.Fields{
			"Error": err,
		}).Info("Could not verify list secret")
		reply.Contacts = nil
		reply.Status = "Error - Please try again later"
		reply.Error = "Invalid Secret"
		json.NewEncoder(w).Encode(reply)
		return
	}

	contacts, err := a.DB.GetAllContacts()
	reply.Contacts = contacts
	reply.Status = "Success"
	reply.Error = ""
	json.NewEncoder(w).Encode(reply)
	return
}

func (a *App) Run(addr string) {
	log.WithFields(log.Fields{
		"Address": addr,
	}).Info("Starting Backend")

	srv := &http.Server{
		Handler:      a.Router,
		Addr:         addr,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
