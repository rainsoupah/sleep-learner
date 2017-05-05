from os import getcwd
import sqlite3
import csv

db = sqlite3.connect('sleep.db')
cur = db.cursor()

#print getcwd()

with open('wordBank.csv','rb') as wordBank:
    # csv.DictReader uses first line in file for column headings by default
    wordNdef = csv.DictReader(wordBank) # comma is default delimiter
    to_db = [(i['word'], i['type'], i['definition'], -1) for i in wordNdef]

cur.executemany("INSERT INTO dictionary_entry (word, type, definition, know) VALUES (?, ?, ?, ?);", to_db)
db.commit()
