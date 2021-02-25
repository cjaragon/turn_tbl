CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(200),
  password TEXT
);

CREATE TABLE album (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  artist VARCHAR(200),
  genre VARCHAR(100),
  img_url TEXT
);

CREATE TABLE user_album (
  user_id INT REFERENCES users(user_id),
  album_id INT REFERENCES album(id),
  heard BOOLEAN
);

CREATE TABLE song (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  album_id INT REFERENCES album(id)
);