UPDATE user_album
SET heard = true
WHERE user_id = $1 AND album_id = $2;


SELECT *
FROM album a
JOIN user_album ua 
ON a.id = ua.album_id
WHERE user_id = $1