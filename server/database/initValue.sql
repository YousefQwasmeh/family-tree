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
    (4, 3),
    (11, 10)
  ;

  COMMIT;
END;