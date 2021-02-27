INSERT INTO album
(title, artist, genre, img_url)
VALUES 
($1, $2, $3, $4)
RETURNING *;

