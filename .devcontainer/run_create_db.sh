#!/bin/sh

psql -U postgres -f ./docker-entrypoint-initdb.d/create_db.sql