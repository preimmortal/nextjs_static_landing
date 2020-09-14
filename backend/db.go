package main

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	log "github.com/sirupsen/logrus"
)

type Database struct {
	Database *gorm.DB
}

func NewDB(dbName string) *Database {
	log.Info("Initializing Database")
	db, err := gorm.Open("sqlite3", dbName)
	if err != nil {
		log.WithFields(log.Fields{
			"Error": err,
		}).Error("Could not open DB")
	}
	db.AutoMigrate(&Contact{})
	return &Database{Database: db}
}

func (d *Database) CreateContact(contact *Contact) error {
	log.WithFields(log.Fields{
		"Contact": contact,
	}).Info("Creating Contact")

	if err := d.Database.Create(contact).Error; err != nil {
		return err
	}
	return nil
}

func (d *Database) GetContact(name string) (*Contact, error) {
	var contact Contact
	err := d.Database.Where(&Contact{Name: name}).First(&contact).Error
	if err != nil {
		return nil, err
	}
	return &contact, nil
}

func (d *Database) GetAllContacts() ([]Contact, error) {
	var contacts []Contact
	err := d.Database.Find(&contacts).Error
	if err != nil {
		return nil, err
	}
	return contacts, nil
}

func (d *Database) Close() {
	d.Database.Close()
}
