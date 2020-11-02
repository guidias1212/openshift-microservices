DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  username VARCHAR(250) NOT NULL,
  privateKey VARCHAR(250) NOT NULL
);

INSERT INTO users (username, privateKey) VALUES
  ('admin', 'admin'),
  ('admin2', 'admin2');