from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

from os import getcwd
import csv,sqlite3
import json

from util.database import get_db_connection

# To do:
#   2. establish redux

quiz_app = Blueprint('quiz', __name__)

@quiz_app.route('/quiz/words/<alphabet>', methods =['GET'])
def get_words(alphabet):
      db = get_db_connection()
      wordlist = []
      toMatch = alphabet + '%'
      for idx, word, type, defin in db.execute(
        ''' SELECT D.id, D.word, D.type, D.definition
            FROM dictionary_entry D LEFT JOIN user_response R
            ON D.id=R.word_id
            WHERE R.word_id IS NULL AND D.word LIKE ?
        ''', (toMatch,)
      ):
        wordlist.append({
                  'idx':idx,
                  'word':word,
                  'type':type,
                  'defin':defin,
        })
      return jsonify(results=wordlist)


@quiz_app.route('/quiz/reply', methods=['POST'])
def quiz_reply():
  data = json.loads(request.data)

  # print request.data

  knowledge = data['know']
  word = data['word']

  conn = get_db_connection()
  with conn:
    cur = conn.cursor()
    cur.execute(
      'UPDATE dictionary_entry SET know = ? WHERE word = ?',
      (knowledge, word)
    )
  conn.commit()

  return request.data
