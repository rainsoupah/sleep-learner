from flask import render_template
from flask import Blueprint
from flask import send_file
from flask import request
from flask import jsonify

from util.text_to_speech import TextToSpeech
from util.text_to_speech import TMP_DIR

import csv
import json
import os
import urllib2, urllib

player_app = Blueprint('player', __name__)


@player_app.route('/player')
def player():
  return render_template('player.html')

@player_app.route('/player/tts/')
def request_tts():
  text = request.args.get('text')
  url = TextToSpeech.generate_wave(text)
  return '/player/wav/' + url;

@player_app.route('/player/words')
def request_word():
	# test data wordlist
	wordlist=[{'word': "a", 'defin': "a is a"},{'word': "b", 'defin': "b is b"}, {'word': "c", 'defin': "c is c"}, {'word': "d", 'defin': "d is d"}, {'word': "e", 'defin': "e is e"},{'word': "f", 'defin': "f is f"},{'word': "g", 'defin': "g is g"},{'word': "h", 'defin': "h is h"},{'word': "i", 'defin': "i is i"},{'word': "j", 'defin': "j is j"}]
	return jsonify(results=wordlist)

@player_app.route('/player/wav/<path:url>')
def retrieve_wav(url):
  return send_file(TMP_DIR + url, mimetype='audio/wav')

@player_app.route('/sound.wav')
def test_sound_file():
  return send_file(
    'static/sound/test.wav',
    mimetype='audio/wav'
  )
