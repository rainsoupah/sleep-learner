#!/bin/bash

if [ ! -f sleep.db ]; then
  sqlite3 sleep.db < schema.sql
  curl -o "words.html" http://freevocabulary.com
  python init_db.py
fi
