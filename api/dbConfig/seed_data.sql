INSERT INTO addresses (
    postcode,
    address
) VALUES (
    'HP1',
    '60 Moor End Lodge'
),
(
    'NW1',
    '23 High street'
),
(
    'RH12',
    '2A London road'
);

INSERT INTO houses (
    addressid,
    owner
) VALUES (
    1,
    'John'
),
(
    2,
    'Paulina'
),
(
    3,
    'John'
);

INSERT INTO people (
    houseid,
    name,
    age,
    householdtotal
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
