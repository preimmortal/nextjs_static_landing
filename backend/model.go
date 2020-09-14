package main

import "github.com/jinzhu/gorm"

type Contact struct {
	gorm.Model
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

type ContactReturn struct {
	Status string `json:"status"`
	Error  string `json:"error"`
}

type List struct {
	gorm.Model
	Secret string `json:"secret"`
}

type ListReturn struct {
	Contacts []Contact
	Status   string `json:"status"`
	Error    string `json:"error"`
}
