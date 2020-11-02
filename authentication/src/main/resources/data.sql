DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS (
  ID INT AUTO_INCREMENT  PRIMARY KEY,
  USERNAME VARCHAR(250) NOT NULL,
  PRIVATE_KEY VARCHAR(250) NOT NULL
);

INSERT INTO USERS (ID, USERNAME, PRIVATE_KEY) VALUES
  (1, 'admin', 'admin'),
  (2, 'admin2', 'admin2');