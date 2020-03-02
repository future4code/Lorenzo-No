-- Exercício 1
```
USE exercicios;

DESCRIBE actors;
```

-- a)
```
SELECT first_name, last_name
FROM actors
WHERE last_name LIKE "%A%";
```


-- b)
```
SELECT last_name
FROM actors
WHERE first_name = "DAN"
OR first_name = "JULIA";
```


-- c)
```
SELECT first_name, last_name
FROM actors
WHERE first_name = "ANGELINA"
OR first_name LIKE "%B%";
```


-- "Bônus"
```
USE `bouman-lorenzo`;

CREATE TABLE actors LIKE exercicios.actors;
/* Alternativa:
CREATE TABLE `actors` (
  `actor_id` smallint(5) unsigned PRIMARY KEY,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL
);
*/

INSERT INTO actors
VALUES (1, "LORENZO", "NO");
```



-- Exercício 2
```
USE exercicios;

DESCRIBE films;
```

-- a)
```
SELECT title, description
FROM films
WHERE length > 120;
```


-- b)
```
SELECT description, release_year, rating
FROM films
WHERE description LIKE "%DOCUMENTARY%";
```


-- c)
```
SELECT title, release_year, special_features
FROM films
WHERE rating = "NC-17"
AND title LIKE "A%";
```


-- d)
```
SELECT *
FROM films
WHERE special_features LIKE "%TRAILERS%"
AND title LIKE "%D%"
AND rating = "PG-13"
OR special_features LIKE "%TRAILERS%"
AND title LIKE "%D%"
AND rating = "R"
OR special_features LIKE "%TRAILERS%"
AND title LIKE "%D%"
AND rating = "NC-17"; -- Há um jeito mais sucinto?
```


-- Bônus
```
USE `bouman-lorenzo`;

CREATE TABLE films LIKE exercicios.films;
/* Alternativa:
CREATE TABLE `films` (
  `film_id` int(10) unsigned NOT NULL DEFAULT '0',
  `title` varchar(128) CHARACTER SET utf8 NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `release_year` year(4) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `rating` enum('G','PG','PG-13','R','NC-17') CHARACTER SET utf8 DEFAULT 'G',
  `special_features` set('Trailers','Commentaries','Deleted Scenes','Behind the Scenes') CHARACTER SET utf8 DEFAULT NULL
)
*/

INSERT INTO films SELECT * from exercicios.films LIMIT 5;
```