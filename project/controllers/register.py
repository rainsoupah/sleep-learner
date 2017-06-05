from flask import render_template
from flask import Blueprint
from flask import jsonify
from flask import request

from os import getcwd
import csv,sqlite3
import json

from util.database import get_db_connection

registration = Blueprint('register', __name__)

@registration.route('/signUp', methods =['GET'])
def signUp():

    # read the posted values from the UI
    _name = request.form['inputName']
    _email = request.form['inputEmail']
    _password = request.form['inputPassword']

    # validate the received values
    if _name and _email and _password:
        return json.dumps({'html':'<span>All fields good !!</span>'})
    else:
        return json.dumps({'html':'<span>Enter the required fields</span>'})
