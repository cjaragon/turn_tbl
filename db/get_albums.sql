SELECT * FROM album a
JOIN user_album ua 
ON a.id = ua.album_id
JOIN users u 
ON ua.user_id = u.user_id
WHERE u.user_id = $1