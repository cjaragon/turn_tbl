DELETE FROM user_album
WHERE album_id = $1; 

DELETE FROM song
WHERE album_id = $1;

DELETE FROM album
WHERE id = $1;

SELECT * FROM album a
JOIN user_album ua 
ON a.id = ua.album_id
WHERE ua.user_id = $1;