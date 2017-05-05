from flask import render_template
from flask import Blueprint
from flask import send_file
from flask import request
from flask import jsonify

from util.database import get_db_connection
from util.text_to_speech import TextToSpeech
from util.text_to_speech import TMP_DIR

player_app = Blueprint('player', __name__)

@player_app.route('/player')
def player():
  return render_template('player.html')


@player_app.route('/player/tts/')
def request_tts():
  text = request.args.get('text')
  url = TextToSpeech.generate_mp3(text)
  return '/player/wav/' + url;


@player_app.route('/player/wav/<path:url>')
def retrieve_wav(url):
  return send_file(TMP_DIR + url, mimetype='audio/wav')


@player_app.route('/player/words')
def get_unknown_words():
  db = get_db_connection()

  wordlist = []
  for _, word, type, defin, know in db.execute('SELECT * FROM dictionary_entry WHERE know=0'):
    wordlist.append({
      'word': word,
      'type': type,
      'defin': defin,
      'know': know,
    })

  return jsonify(results=wordlist)
