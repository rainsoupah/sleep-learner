# Sleep Learner

There are videos on youtube of a voice saying a word and its definition for hours, so you play it while you sleep.

* Example (English): https://www.youtube.com/watch?v=y9g7ZJFtQms
* Example (Japanese): https://www.youtube.com/watch?v=OJSPE0jNJpI 
 
The problem with this is you’re going to know a lot of the words. Wouldn’t it be more useful if it generated a mp3 personalized for you, based on words you find difficult? In this hackathon project, we quiz the user to find out what words he doesn’t know, then use a speech library to play the words and definitions as he falls asleep.

# Project Demo
![sleeplearndemo](https://user-images.githubusercontent.com/13390498/27753483-cc872d3e-5db3-11e7-8861-97c8aea0b594.gif)

## Installation

1. virtualenv venv
2. source venv/bin/activate
3. pip install -r requirements.txt
4. sudo npm install -g bower
5. bower install
6. npm install --save-dev babel-cli babel-preset-react
7. sh init\_db.sh
8. mkdir -p /data/sleep-learner

## Running
1. python project/app.py
2. Go to localhost:5000
