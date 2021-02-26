INSERT INTO album
(title, artist, genre, img_url)
VALUES 
($1, $2, $3, $4);

INSERT INTO user_album
(user_id, album_id)
VALUES
($5, album.id);

SELECT * FROM album a
JOIN user_album ua 
ON a.id = ua.album_id
JOIN users u 
ON ua.user_id = u.user_id
WHERE user_id = $5;