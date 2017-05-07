from os import getcwd
import sqlite3
import csv
import re

# download
# curl -o "words.html" http://freevocabulary.com
# word_file = open("words.html")
# word_lines = filter(lambda line: re.match("^([A-Za-z]+) (n|v|adj)\. .*<br>", line), word_file)
#
# sub_lines = [line.split('<br>')[0] for line in word_lines]
# words = [line.split()[0].lower() for line in word_lines]
# types = [line.split()[1].lower() for line in word_lines]
#
# defins = [line.split('.')[1] for line in sub_lines]
# data = zip(words,types,defins)
#
# with open('SAT.csv','wb') as out:
#     csv_out=csv.writer(out)
#     csv_out.writerow(['word','type','definition'])
#     for row in data:
#         csv_out.writerow(row)

# import to db
db = sqlite3.connect('sleep.db')
cur = db.cursor()

print getcwd()

with open('SAT.csv','rb') as wordBank:
    # csv.DictReader uses first line in file for column headings by default
    wordNdef = csv.DictReader(wordBank) # comma is default delimiter
    to_db = [(i['word'], i['type'], i['definition'], i['alpha'], -1) for i in wordNdef]

cur.executemany("INSERT INTO dictionary_entry (word, type, definition, alpha, know) VALUES (?, ?, ?, ?,?);", to_db)
db.commit()
db.close()
