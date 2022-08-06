DROP TABLE IF EXISTS people;
CREATE TABLE people (
    id serial PRIMARY KEY,
	houseid INT NOT NULL,
	name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    householdtotal INT NOT NULL
);
-- COPY people
-- FROM $str$/data/people.csv$str$ 
-- DELIMITER ',' CSV HEADER;


DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
	houseid INT NOT NULL,
    addressid INT NOT NULL,
    owner VARCHAR(100)
);
-- COPY content
-- FROM $str$/data/houses.csv$str$ 
-- DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS addresses;
CREATE TABLE addresses (
    addressid INT NOT NULL,
	postcode VARCHAR(10),
    address VARCHAR(500)
);
-- COPY addresses
-- FROM $str$/data/addresses.csv$str$ 
-- DELIMITER ',' CSV HEADER;
