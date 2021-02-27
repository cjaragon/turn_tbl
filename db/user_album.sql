INSERT INTO user_album
(user_id, album_id)
VALUES
($1, $2);

SELECT * FROM album a
JOIN user_album ua 
ON a.id = ua.album_id
WHERE ua.user_id = $1;