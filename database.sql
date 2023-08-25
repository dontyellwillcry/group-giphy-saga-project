CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- Favorites table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (500) NOT NULL,
    "category_id" INT REFERENCES "category"
);

-- 'dummy' data to test with
INSERT INTO "favorites" ("url", "category_id" )
VALUES ('https://media1.giphy.com/media/fQZeQ8AZFRnQzQXYl7/100.gif?cid=2aabdf1ee8qcmpl63xt0f7trg2vee73mfbwlxh3kedqlxqtm&ep=v1_gifs_search&rid=100.gif&ct=g
', 5), ('https://media1.giphy.com/media/fQZeQ8AZFRnQzQXYl7/100.gif?cid=2aabdf1ee8qcmpl63xt0f7trg2vee73mfbwlxh3kedqlxqtm&ep=v1_gifs_search&rid=100.gif&ct=g
', 1), ('https://media1.giphy.com/media/fQZeQ8AZFRnQzQXYl7/100.gif?cid=2aabdf1ee8qcmpl63xt0f7trg2vee73mfbwlxh3kedqlxqtm&ep=v1_gifs_search&rid=100.gif&ct=g', 3);