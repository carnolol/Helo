SELECT * FROM posts p
JOIN users u on u.id = p.author_id
WHERE post_id = $1