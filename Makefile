dev: init-db
	python project/app.py

init-db:
	sh init_db.sh

clean:
	rm sleep.db
