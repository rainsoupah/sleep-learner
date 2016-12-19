from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

import csv
import json

from util.database import get_db_connection

quiz_app = Blueprint('quiz', __name__)


@quiz_app.route('/quiz/words')
def get_words():
  db = get_db_connection()

  wordlist = []
  for _, word, defin, know in db.execute('SELECT * FROM dictionary_entry'):
    wordlist.append({
      'word': word,
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
      'UPDATE dictionary_entry SET know = ? WHERE word = ?',
      (knowledge, word)
    )
  conn.commit()

  return 'ok'
