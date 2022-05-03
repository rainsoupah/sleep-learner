from flask import render_template
from flask import Blueprint
from flask import send_file
from flask import request
from flask import jsonify
from werkzeug.utils import safe_join

# from util.database import get_db_connection
from util.tts import TTS
from util.tts import TMP_DIR

player_app = Blueprint('player', __name__)

@player_app.route('/player/tts')
def get_tts():
    text = request.args.get('text')
    url = TTS.generate_mp3(text)
    return '/player/wav/' + url


@player_app.route('/player/wav/<path:url>')
def retrieve_wav(url):
    return send_file(safe_join(TMP_DIR, url), mimetype='audio/wav')
