import sqlite3

def get_db_connection():
  return sqlite3.connect('sleep.db')

#to reset/insert into database:
#sqlite3 sleep.db < schema.sql
