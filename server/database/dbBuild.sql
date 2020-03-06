BEGIN;
  DROP TABLE IF EXISTS person, child_parent;

  CREATE TABLE person
  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20)
  );

  CREATE TABLE child_parent
  (
    child_id INT NOT NULL,
    parent_id INT NOT NULL,
    FOREIGN KEY (child_id) REFERENCES person(id),
    FOREIGN KEY (parent_id) REFERENCES person (id),
    PRIMARY KEY (child_id)
  );

  COMMIT;
END;