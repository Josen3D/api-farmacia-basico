CREATE DATABASE IF NOT EXISTS farmacia;

USE farmacia;

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(150),
    role ENUM("doctor", "nurse") DEFAULT "nurse",
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
);

CREATE TABLE medicaments(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    laboratory VARCHAR(20),
    price DECIMAL(10, 2),
    quantity INT,
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
);

DESCRIBE medicaments;

INSERT INTO medicaments (name, laboratory, price, quantity, createdAt, updatedAt)
	VALUES('desenfriol', 'lab A', 125.2, 100, now(), now());
INSERT INTO medicaments (name, laboratory, price, quantity, createdAt, updatedAt)
	VALUES('diclofenaco', 'lab B', 12, 1000, now(), now());

INSERT INTO users (name, email, password, createdAt, updatedAt)
    VALUES("Antonio Duran", "antonio@email.com", "test.123", now(), now());
    
SELECT * FROM medicaments;