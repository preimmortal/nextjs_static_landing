package main

import (
	"os"

	log "github.com/sirupsen/logrus"
)

func main() {
	log.Info("Starting Backend")
	a := App{}
	a.Init(
		os.Getenv("APP_DB_NAME"),
	)
	defer a.Stop()

	a.Run(os.Getenv("APP_PORT"))
}
