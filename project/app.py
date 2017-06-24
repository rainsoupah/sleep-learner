from flask import Flask
from flask import render_template
# from flask_sqlalchemy import SQLAlchemy

from controllers.player import player_app
from controllers.quiz import quiz_app
from util.database import db

import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# from controllers.register import registration

def create_app():
    app = Flask(__name__)
    app.config['DEBUG'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'sleep.db')
    db.init_app(app)
    app.register_blueprint(player_app)
    app.register_blueprint(quiz_app)
    return app

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'sleep.db')
# db = SQLAlchemy(app)

# app.register_blueprint(registration)
#database setup



if __name__ == '__main__':
    app = create_app()
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def catch_all(path):
        return render_template('index.html')
    app.run()
    # Because this is just a demonstration we set up the database like this.
    # if not os.path.isfile('/tmp/test.db'):
    #   setup_database(app)
