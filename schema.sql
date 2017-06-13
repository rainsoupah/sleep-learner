
CREATE TABLE IF NOT EXISTS dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  type          TEXT,
  definition    TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT    NOT NULL,
  email         TEXT    NOT NULL,
  password      VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS user_response (
  user_id       INTEGER,
  word_id       INTEGER
);
