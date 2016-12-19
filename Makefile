dev: init-db make-jsx
	python project/app.py

init-db:
	sh init_db.sh

make-jsx:
	mkdir -p project/static/dist
	babel project/static/src/main.jsx > project/static/dist/main.js
	babel project/static/src/player.jsx > project/static/dist/player.js

clean:
	rm sleep.db
