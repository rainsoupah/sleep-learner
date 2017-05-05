CREATE TABLE dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  type          TEXT,
  definition    TEXT    NOT NULL,
  know          INTEGER
);
