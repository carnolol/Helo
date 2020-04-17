CREATE TABLE posts (
id serial primary key,
author_id INTEGER,
title VARCHAR(45),
img TEXT, 
content TEXT,
FOREIGN KEY (author_id) REFERENCES users(id)
)


CREATE TABLE users (
id serial primary key,
username VARCHAR(20),
password VARCHAR(20),
profile_pic text
)