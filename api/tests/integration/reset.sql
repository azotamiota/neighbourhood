TRUNCATE people RESTART IDENTITY;

INSERT INTO people (houseid, name, age, householdtotal) 
VALUES
    (1, 'Person1', 33, 3),
    (2, 'Person2', 44, 4);

-- INSERT INTO dogs (name, age, owner_id) 
-- VALUES
--     ('Dog1', 10, 1 ),
--     ('Dog2', 3, 2 ),
--     ('Dog3', 5, 1 );
