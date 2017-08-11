### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(40) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
	eaten_date timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

CREATE DATABASE chirpy_db;

USE chirpy_db;

CREATE TABLE chirps
(
	id int NOT NULL AUTO_INCREMENT,
    author VARCHAR(50) NOT NULL,
    chirp BOOLEAN DEFAULT false,
    
);
    