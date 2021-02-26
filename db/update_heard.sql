UPDATE user_album
SET heard = true
WHERE user_id = $1 AND album_id = $2
returning *;