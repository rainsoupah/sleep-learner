from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

from flask_login import current_user

from os import getcwd
import csv,sqlite3
import json

# from util.database import get_db_connection
from util.database import Dictionary, User, Response, db

quiz_app = Blueprint('quiz', __name__)

@quiz_app.route('/api/words', methods=['GET'])
def get_words():
    userId = request.args['userId']
    if ((not current_user.is_anonymous) and (str(current_user.id) == str(userId))):
        wordlist = []
        _subquery = db.session.query(Response)\
                    .filter(Response.user_id == userId).subquery()

        _query = db.session.query(Dictionary)\
            .outerjoin(_subquery, _subquery.c.word_id == Dictionary.id)\
            .filter(_subquery.c.word_id == None)
            # .filter(Response.user_id == userId)\
            # .filter(Response.word_id == Dictionary.id)
            # .filter(Response.word_id == None)
        print userId
        for entry in _query:
            # print entry
            wordlist.append({
                'idx': entry.id,
                'word': entry.word,
                'type': entry.type,
                'defin': entry.definition
                # 'response': entry.Response.word_id
            })
        # return json.dumps(wordlist)
        # print len(wordlist)
        return jsonify(results=wordlist)
    else:
        return "You are not logged in my dear"

# POST data
@quiz_app.route('/api/reply', methods=['POST'])
def quiz_reply():
  data = json.loads(request.data)

  user_id = data['user']
  words_ids = data['knownWords']

  if (str(current_user.id) == str(user_id)):
      for i in range(len(words_ids)):
          response = Response(user_id, words_ids[i])
          db.session.add(response)
          db.session.commit()
      return request.data
  else:
      return "BAD POST REQUEST: wrong user"


  # db = get_db_connection()
  # with db:
  #     for word_id in words_ids:
  #         cur = db.cursor()
  #         cur.execute(
  #           '''   INSERT INTO user_response (user_id, word_id)
  #                 VALUES (?,? )
  #           ''', (user_id, word_id)
  #         )
  # db.commit()



# direct sqlite commands:
# def get_words(alphabet):
#       db = get_db_connection()
#       wordlist = []
#       toMatch = alphabet + '%'
#       #sqlalchemy join?
#       for idx, word, type, defin in db.execute(
#         ''' SELECT D.id, D.word, D.type, D.definition
#             FROM dictionary_entry D LEFT JOIN user_response R
#             ON D.id=R.word_id
#             WHERE R.word_id IS NULL AND D.word LIKE ?
#         ''', (toMatch,)
#       ):
#         wordlist.append({
#                   'idx':idx,
#                   'word':word,
#                   'type':type,
#                   'defin':defin,
#         })
#       return jsonify(results=wordlist)
