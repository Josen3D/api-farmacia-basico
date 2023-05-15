CREATE DATABASE IF NOT EXISTS farmacia;

USE farmacia;

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

SELECT * FROM medicaments;