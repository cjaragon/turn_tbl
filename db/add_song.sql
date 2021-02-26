INSERT INTO song
(name, album_id)
VALUES 
($1, $2);

SELECT * FROM song 
WHERE album_id = $2