CREATE TABLE dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  definition    TEXT    NOT NULL
);

INSERT INTO dictionary_entry (word, definition) VALUES
  ('cat', 'an animal that meows'),
  ('dog', 'an animal that woofs');
