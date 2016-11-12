from flask import render_template
from flask import Blueprint
from flask import send_file
from flask import request

from util.text_to_speech import TextToSpeech
from util.text_to_speech import TMP_DIR

player_app = Blueprint('player', __name__)


@player_app.route('/player')
def player():
  return render_template('player.html')

@player_app.route('/player/tts/')
def request_tts():
  text = request.args.get('text')
  url = TextToSpeech.generate_wave(text)
  return '/player/wav/' + url;

@player_app.route('/player/wav/<path:url>')
def retrieve_wav(url):
  return send_file(TMP_DIR + url, mimetype='audio/wav')

@player_app.route('/sound.wav')
def test_sound_file():
  return send_file(
    'static/sound/test.wav',
    mimetype='audio/wav'
  )
