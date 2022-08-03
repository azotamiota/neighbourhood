DROP TABLE IF EXISTS people;
CREATE TABLE people (
	name VARCHAR,
    age INT,
    householdPeople INT,
    houseid: INT
);
COPY people
FROM $str$/data/people.csv$str$ 
DELIMITER ',' CSV HEADER;


DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
	houseid INT,
    addressid INT,
    owner VARCHAR
);
COPY content
FROM $str$/data/houses.csv$str$ 
DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS addresses;
CREATE TABLE addresses (
	reviewid INT,
    genre VARCHAR
);
COPY addresses
FROM $str$/data/addresses.csv$str$ 
DELIMITER ',' CSV HEADER;
