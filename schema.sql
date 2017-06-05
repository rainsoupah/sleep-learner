CREATE TABLE dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  type          TEXT,
  definition    TEXT    NOT NULL,
);

CREATE TABLE users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT    NOT NULL,
  email         TEXT    NOT NULL,
);

CREATE TABLE user_response (
  user_id       INTEGER,
  word_id       INTEGER,
);
