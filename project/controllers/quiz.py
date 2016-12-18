from flask import render_template
from flask import Blueprint
from flask import jsonify

import csv
import json

from util.database import get_db_connection

quiz_app = Blueprint('quiz', __name__)


@quiz_app.route('/quiz/words')
def get_words():
  db = get_db_connection()

  wordlist = []
  for _, word, defin in db.execute('SELECT * FROM dictionary_entry'):
    wordlist.append({
      'word': word,
      'defin': defin,
    })

  return jsonify(results=wordlist)
