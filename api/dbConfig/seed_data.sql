INSERT INTO people (
    houseid,
    name,
    age,
    householdPeople
) VALUES (
    1,
    'John',
    34,
    2
),
(
    2,
    'Paul',
    39,
    4
),
(
    3,
    'Emily',
    23,
    1
);

INSERT INTO houses (
    houseid,
    addressid,
    owner
) VALUES (
    1,
    1,
    'John'
),
(
    2,
    2,
    'Paulina'
),
(
    3,
    3,
    'John'
);

INSERT INTO addresses (
    addressid,
    postcode,
    address
) VALUES (
    1,
    'HP1',
    '60 Moor End Lodge'
),
(
    2,
    'NW1',
    '23 High street'
),
(
    1,
    'RH12',
    '2A London road'
);

