from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

from os import getcwd
import csv,sqlite3
import json

from util.database import get_db_connection

quiz_app = Blueprint('quiz', __name__)

@quiz_app.route('/quiz/words')
def get_words():
      db = get_db_connection()
    #   cur = db.cursor()
      #
    #   with open('wordBank.csv','rb') as wordBank:
    #     # csv.DictReader uses first line in file for column headings by default
    #     wordNdef = csv.DictReader(wordBank) # comma is default delimiter
    #     to_db = [(i['word'], i['type'], i['definition'], -1) for i in wordNdef]
      #
    #   cur.executemany("INSERT INTO dictionary_entry (word, type, definition, know) VALUES (?, ?, ?, ?);", to_db)
    #   db.commit()

      wordlist = []
      for idx, word, type, defin, know in db.execute('SELECT * FROM dictionary_entry'):
        wordlist.append({
                  'idx':idx,
                  'word': word,
                  'type':type,
                  'defin': defin,
                  'know': know,
        })
      return jsonify(results=wordlist)


@quiz_app.route('/quiz/reply', methods=['POST'])
def quiz_reply():
  data = json.loads(request.data, 'utf-8')

  knowledge = data['know']
  word = data['word']

  conn = get_db_connection()
  with conn:
    cur = conn.cursor()
    cur.execute(
      'UPDATE dictionary_entry SET know = ? WHERE idx = ?',
      (knowledge, idx)
    )
  conn.commit()

  return 'ok'
