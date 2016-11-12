from flask import render_template
from flask import Blueprint
from flask import send_file

from util.text_to_speech import TextToSpeech

player_app = Blueprint('player', __name__)


@player_app.route('/player')
def player():
  return render_template('player.html')

@player_app.route('/player/tts')
def tts():
  url = TextToSpeech.generate_wave('this is dynamically generated, yay')
  return url

@player_app.route('/sound.wav')
def test_sound_file():
  return send_file(
    'static/sound/test.wav',
    mimetype='audio/wav'
  )
