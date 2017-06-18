from flask import Flask
from flask import render_template

from controllers.player import player_app
from controllers.quiz import quiz_app
# from controllers.register import registration

app = Flask(__name__)
app.register_blueprint(player_app)
app.register_blueprint(quiz_app)
# app.register_blueprint(registration)


@app.route('/')
def hello():
  return render_template('index.html')


if __name__ == '__main__':
  app.run(debug=True)
