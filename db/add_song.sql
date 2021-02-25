INSERT INTO song
(name, album_id)
VALUES 
($1, $2);

SELECT * FROM song s
JOIN album a 
ON s.album_id = a.id