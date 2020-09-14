package main

import (
	"errors"
	"strings"
)

func verifyContact(contact *Contact) error {
	if contact == nil {
		return errors.New("Invalid Contact")
	}
	if contact.Name == "" {
		return errors.New("Invalid or Missing Name Field")
	}

	if !strings.Contains(contact.Email, "@") {
		return errors.New("Invalid or Missing Email Field")
	}

	if contact.Message == "" {
		return errors.New("Invalid or Missing Message Field")
	}
	return nil
}
