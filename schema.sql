CREATE TABLE dictionary_entry (
  id            INT     PRIMARY KEY,
  word          TEXT    NOT NULL,
  definition    TEXT    NOT NULL
);

INSERT INTO dictionary_entry (word, definition) VALUES
  ('cat', 'an animal that meows'),
  ('dog', 'an animal that woofs');
