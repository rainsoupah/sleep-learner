from flask import Flask,render_template, Blueprint, jsonify, request, redirect,url_for,flash
from flask_login import LoginManager, login_user, logout_user,current_user
from util.oauth import OAuthSignIn

# from os import getcwd
# import csv,sqlite3
import json

# from util.database import get_db_connection
from util.database import Dictionary, User, Response, db

registration = Blueprint('registration', __name__)

lm = LoginManager()
lm.login_view = 'index'
@lm.user_loader
def load_user(id):
    return User.query.get(int(id))

@registration.route('/registration')
def index():
    return render_template('loggin.html')


@registration.route('/logout')
def logout():
    logout_user()
    return redirect('/')


@registration.route('/authorize/<provider>')
def oauth_authorize(provider):
    if not current_user.is_anonymous:
        return redirect(url_for('registration.index'))
    oauth = OAuthSignIn.get_provider(provider)
    return oauth.authorize()


@registration.route('/callback/<provider>')
def oauth_callback(provider):
    if not current_user.is_anonymous:
        return redirect(url_for('registration.index'))
    oauth = OAuthSignIn.get_provider(provider)
    social_id, username, email = oauth.callback()
    if social_id is None:
        flash('Authentication failed.')
        return redirect(url_for('registration.index'))
    user = User.query.filter_by(social_id=social_id).first()
    if not user:
        user = User(social_id=social_id, nickname=username, email=email)
        db.session.add(user)
        db.session.commit()
    login_user(user, True)
    return redirect(url_for('registration.index'))