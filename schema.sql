CREATE TABLE dictionary_entry (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  word          TEXT    NOT NULL,
  definition    TEXT    NOT NULL,
  know          INTEGER
);

INSERT INTO dictionary_entry (word, definition,know) VALUES
  ('cat', 'an animal that meows',0),
  ('dog', 'an animal that woofs',0),
  ('wolf', 'an animal that howls',0),
  ('fish', 'an animal that swims',0),
  ('frog', 'an animal that eats insects',0),
  ('bird', 'an animal that flies',0),
  ('cow', 'an animal that doesnt speak',0),
  ('sheep', 'an animal that sheds',0);
