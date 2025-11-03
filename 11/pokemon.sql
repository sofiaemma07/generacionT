DROP DATABASE IF EXISTS Pokemon;
CREATE DATABASE Pokemon;
USE Pokemon;
CREATE TABLE Pokemon (
    id_pokedex INTEGER PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo_primario VARCHAR(20),
    nivel INTEGER,
    fecha_captura DATE
);

/*
+-------------------+
| Tables_in_pokemon |
+-------------------+
| pokemon           |
+-------------------+

+---------------+-------------+------+-----+---------+-------+
| Field         | Type        | Null | Key | Default | Extra |
+---------------+-------------+------+-----+---------+-------+
| id_pokedex    | int(11)     | NO   | PRI | NULL    |       |
| nombre        | varchar(50) | NO   |     | NULL    |       |
| tipo_primario | varchar(20) | YES  |     | NULL    |       |
| nivel         | int(11)     | YES  |     | NULL    |       |
| fecha_captura | date        | YES  |     | NULL    |       |
+---------------+-------------+------+-----+---------+-------+
*/

INSERT INTO Pokemon (id_pokedex, nombre, tipo_primario, nivel, fecha_captura) VALUES
(1, 'Bulbasaur', 'Planta', 5, '2024-08-10'),
(4, 'Charmander', 'Fuego', 7, '2024-09-01'),
(7, 'Squirtle', 'Agua', 6, '2024-08-15'),
(25, 'Pikachu', 'Eléctrico', 10, '2024-10-20'),
(133, 'Eevee', 'Normal', 4, '2024-07-25');

/*
+------------+------------+---------------+-------+---------------+
| id_pokedex | nombre     | tipo_primario | nivel | fecha_captura |
+------------+------------+---------------+-------+---------------+
|          1 | Bulbasaur  | Planta        |     5 | 2024-08-10    |
|          4 | Charmander | Fuego         |     7 | 2024-09-01    |
|          7 | Squirtle   | Agua          |     6 | 2024-08-15    |
|         25 | Pikachu    | El?ctrico     |    10 | 2024-10-20    |
|        133 | Eevee      | Normal        |     4 | 2024-07-25    |
+------------+------------+---------------+-------+---------------+
*/

-- PRACTICA DE CONSULTAS --
-- A. SELECT básico (Recuperar todos los registros)
SELECT * FROM Pokemon;

/*
+------------+------------+---------------+-------+---------------+
| id_pokedex | nombre     | tipo_primario | nivel | fecha_captura |
+------------+------------+---------------+-------+---------------+
|          1 | Bulbasaur  | Planta        |     5 | 2024-08-10    |
|          4 | Charmander | Fuego         |     7 | 2024-09-01    |
|          7 | Squirtle   | Agua          |     6 | 2024-08-15    |
|         25 | Pikachu    | El?ctrico     |    10 | 2024-10-20    |
|        133 | Eevee      | Normal        |     4 | 2024-07-25    |
+------------+------------+---------------+-------+---------------+
*/

-- B. Filtrar con WHERE (Seleccionar Pokémon de tipo 'Agua')
SELECT * FROM Pokemon
WHERE tipo_primario = 'Agua';

/*
+------------+----------+---------------+-------+---------------+
| id_pokedex | nombre   | tipo_primario | nivel | fecha_captura |
+------------+----------+---------------+-------+---------------+
|          7 | Squirtle | Agua          |     6 | 2024-08-15    |
+------------+----------+---------------+-------+---------------+
*/

-- C. Ordenar resultados con ORDER BY (Ordenar por nivel DESCENDENTE)
SELECT * FROM Pokemon
ORDER BY nivel DESC;

/*
+------------+------------+---------------+-------+---------------+
| id_pokedex | nombre     | tipo_primario | nivel | fecha_captura |
+------------+------------+---------------+-------+---------------+
|         25 | Pikachu    | El?ctrico     |    10 | 2024-10-20    |
|          4 | Charmander | Fuego         |     7 | 2024-09-01    |
|          7 | Squirtle   | Agua          |     6 | 2024-08-15    |
|          1 | Bulbasaur  | Planta        |     5 | 2024-08-10    |
|        133 | Eevee      | Normal        |     4 | 2024-07-25    |
+------------+------------+---------------+-------+---------------+
*/