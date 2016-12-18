CREATE TABLE dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  definition    TEXT    NOT NULL,
  know          INTEGER
);

INSERT INTO dictionary_entry (word, definition,know) VALUES
  ('cat', 'an animal that meows',0),
  ('dog', 'an animal that woofs',0);
