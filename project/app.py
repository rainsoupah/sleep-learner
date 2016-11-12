from flask import Flask
from flask import render_template
from flask import send_file

app = Flask(__name__)


@app.route('/')
def hello():
  return render_template('hello.html')


@app.route('/sound.wav')
def test_sound_file():
  return send_file(
    'static/sound/test.wav',
    mimetype='audio/wav'
  )


if __name__ == '__main__':
  app.run(debug=True)
