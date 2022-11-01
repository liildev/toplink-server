-- DROP DATABASE IF EXISTS top_link CASCADE;
-- CREATE DATABASE top_link;
--EXTENSIONS
CREATE EXTENSION pgcrypto;

CREATE EXTENSION "uuid-ossp";

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    full_name varchar(60) NOT NULL,
    user_name varchar(60) NOT NULL UNIQUE,
    email text NOT NULL UNIQUE,
    password varchar(60) NOT NULL,
    number varchar(12) NOT NULL
);

--insert users
INSERT INTO users (full_name, user_name, email, PASSWORD, number)
    VALUES ('Nozim', 'usupvc', 'mansurov@mail.ru', crypt('12345678', gen_salt('bf')), '998999556699');

