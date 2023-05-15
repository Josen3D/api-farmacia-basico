CREATE DATABASE IF NOT EXISTS farmacia;

USE farmacia;

CREATE TABLE medicaments(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    laboratory VARCHAR(20),
    price DECIMAL(10, 2),
    quantity INT,
    PRIMARY KEY(id)
);

DESCRIBE medicaments;

INSERT INTO medicaments (name, laboratory, price, quantity)
	VALUES('desenfriol', 'lab A', 125.2, 100);
INSERT INTO medicaments (name, laboratory, price, quantity)
	VALUES('diclofenaco', 'lab B', 12, 1000);

SELECT * FROM medicaments;