from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

from os import getcwd
import csv,sqlite3
import json

from util.database import get_db_connection

quiz_app = Blueprint('quiz', __name__)

@quiz_app.route('/quiz/words/<alphabet>', methods =['GET'])
def get_words(alphabet):
      db = get_db_connection()
      wordlist = []
      for idx, word, type, defin, _, know in db.execute('SELECT * FROM dictionary_entry WHERE alpha = ?', alphabet): #since words can duplicate
        wordlist.append({
                  'idx':idx,
                  'word':word,
                  'type':type,
                  'defin':defin,
                  'know':know,
        })
      return jsonify(results=wordlist)


@quiz_app.route('/quiz/reply', methods=['GET','POST'])
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
