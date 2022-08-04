DROP TABLE IF EXISTS people;
CREATE TABLE people (
    id serial PRIMARY KEY,
	houseid INT NOT NULL,
	name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    householdPeople INT NOT NULL
);
COPY people
FROM $str$/data/people.csv$str$ 
DELIMITER ',' CSV HEADER;


DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
	houseid serial PRIMARY KEY,
    addressid INT,
    owner VARCHAR(100)
);
COPY content
FROM $str$/data/houses.csv$str$ 
DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS addresses;
CREATE TABLE addresses (
	postcode VARCHAR(10),
    address VARCHAR(500)
);
COPY addresses
FROM $str$/data/addresses.csv$str$ 
DELIMITER ',' CSV HEADER;
