SELECT (id, title, artist, genre, img_url, heard  )
FROM album a
JOIN user_album ua 
ON a.id = ua.album_id
WHERE user_id = $1