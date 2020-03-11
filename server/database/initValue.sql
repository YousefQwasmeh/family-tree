BEGIN;
  INSERT INTO person
    (name)
  VALUES
    ('hasan'),
    ('khaled'),
    ('hasan'),
    ('khaled'),
    ('mohammad'),
    ('hamed'),
    ('yousef'),
    ('ahmad'),
    ('saed'),
    ('mohammad'),
    ('saed'),
    ('abd allah'),
    ('fathi'),
    ('firas'),
    ('musab'),
    ('sohaib')
  ;

  INSERT INTO child_parent
  VALUES
    (2, 1),
    (9, 1),
    (13, 1),
    (3, 2),
    (4, 3),
    (5, 2),
    (6, 2),
    (7, 2),
    (8, 2),
    (10, 9),
    (11, 10),
    (12, 9),
    (14, 13),
    (15, 13),
    (16, 13)
  ;

  COMMIT;
END;