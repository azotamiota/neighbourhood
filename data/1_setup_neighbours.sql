DROP TABLE IF EXISTS addresses;
CREATE TABLE addresses (
    addressid serial PRIMARY KEY,
	postcode VARCHAR(10),
    address VARCHAR(500)
);
-- COPY addresses
-- FROM $str$/data/addresses.csv$str$ 
-- DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS houses;
CREATE TABLE houses (
	houseid serial PRIMARY KEY,
    addressid INT,
    owner VARCHAR(100),
    CONSTRAINT fk_address
        FOREIGN KEY (addressid)
            REFERENCES addresses(addressid)
);
-- COPY content
-- FROM $str$/data/houses.csv$str$ 
-- DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS people;
CREATE TABLE people (
    id serial PRIMARY KEY,
	houseid INT,
	name VARCHAR(100),
    age INT,
    householdtotal INT,
    CONSTRAINT fk_house
        FOREIGN KEY (houseid)
            REFERENCES houses(houseid)
);
-- COPY people
-- FROM $str$/data/people.csv$str$ 
-- DELIMITER ',' CSV HEADER;



