from flask import Flask
from flask import render_template
# from flask_cors import CORS, cross_origin
from flask_login import login_required

from controllers.player import player_app
from controllers.quiz import quiz_app
from controllers.registration import registration, lm
from util.database import db

import os

#twitter doesnt work
def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'US president George W Bush'
    app.config['DEBUG'] = True
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'sleep.db')
    app.config['OAUTH_CREDENTIALS'] = {
        'facebook': {
            'id': '291831464560356',
            'secret': '37c0e0a96d098f1c0902ba5e00e382e9'
        },
        'twitter': {
            'id': '3RzWQclolxWZIMq5LJqzRZPTl',
            'secret': 'm9TEd58DSEtRrZHpz2EjrV9AhsBRxKMo8m3kuIZj3zLwzwIimt'
        }
    }
    db.init_app(app)
    lm.init_app(app)
    # cors = CORS(app, resources={r"/authorize/*": {"origins": "*"}})
    app.register_blueprint(player_app)
    app.register_blueprint(quiz_app)
    app.register_blueprint(registration)
    return app

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'sleep.db')
# db = SQLAlchemy(app)

# app.register_blueprint(registration)
#database setup
    # @app.route('/', defaults={'path': ''})
    # @app.route('/<path:path>')
    # def catch_all(path):
    #     return render_template('index.html')


if __name__ == '__main__':
    app = create_app()
    @app.route('/')
    def welcome():
        return render_template('welcome.html')

    @app.route('/dashboard')
    @login_required
    def home():
        return render_template('index.html')

    app.run()
    # Because this is just a demonstration we set up the database like this.
    # if not os.path.isfile('/tmp/test.db'):
    #   setup_database(app)
