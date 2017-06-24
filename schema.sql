CREATE TABLE IF NOT EXISTS dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  type          TEXT,
  definition    TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id            INTEGER   PRIMARY KEY AUTOINCREMENT,
  social_id     VARCHAR   UNIQUE NOT NULL,
  nickname      VARCHAR   NOT NULL,
  email         VARCHAR
);

CREATE TABLE IF NOT EXISTS user_response (
  user_id       INTEGER,
  word_id       INTEGER
);
