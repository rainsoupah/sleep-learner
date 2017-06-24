# import sqlite3
#
# def get_db_connection():
#   return sqlite3.connect('sleep.db')
# from app import db

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Dictionary(db.Model):
    __tablename__ = 'dictionary_entry'
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(64), nullable=False)
    type = db.Column(db.String(64), nullable=True)
    definition = db.Column(db.String, nullable=False)

#interacts with oauth
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    social_id = db.Column(db.String(64), nullable=False, unique=True)
    nickname = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String, nullable=True)

class Response(db.Model):
    __tablename__ = 'user_response'
    user_id = db.Column(db.Integer, primary_key=True)
    word_id = db.Column(db.Integer, primary_key=True)

    def __init__(self, user_id, word_id):
    	self.user_id = user_id
    	self.word_id = word_id
