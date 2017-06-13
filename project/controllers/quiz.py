from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

from os import getcwd
import csv,sqlite3
import json

from util.database import get_db_connection

quiz_app = Blueprint('quiz', __name__)

@quiz_app.route('/api/words/<alphabet>', methods =['GET'])
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

# POST data
@quiz_app.route('/api/reply', methods=['POST'])
def quiz_reply():
  data = json.loads(request.data)

  user_id = data['user']
  words_ids = data['knownWords']

  db = get_db_connection()
  with db:
      for word_id in words_ids:
          cur = db.cursor()
          cur.execute(
            '''   INSERT INTO user_response (user_id, word_id)
                  VALUES (?,? )
            ''', (user_id, word_id)
          )
  db.commit()

    # print request.data
    # knowledge = data['know']
    # word = data['word']
  # with conn:
  #   cur = conn.cursor()
  #   cur.execute(
  #     '''   INSERT INTO user_response (user_id, word_id)
  #           VALUES (?,? )
  #     ''', (user, word)
  #   )
  # conn.commit()

  return request.data
