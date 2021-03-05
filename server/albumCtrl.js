
module.exports = {
    addAlbum: async (req, res) => {
        const db = req.app.get('db')
        const {title, artist, genre, imgUrl} = req.body
        const {id} = req.session.user
        const [album] = await db.add_album([title, artist, genre, imgUrl])
        console.log(album)
        const userAlbum = await db.user_album([id, album.id])
        return res.status(200).send(userAlbum)
    },

    getUserAlbums: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const userAlbums = await db.get_albums([id])
        res.status(200).send(userAlbums)
    },

    deleteAlbum: async (req, res) => {
        const db = req.app.get('db')
        const {albumId} = req.params
        const newList = await db.delete_album([albumId])
        return res.status(200).send(newList)
    },

    albumHeard: async (req, res) => {
        const db = req.app.get('db')
        const {albumId} = req.params
        const {id} = req.session.user
        const heardAlbum = await db.update_heard([id, albumId])
        return res.status(200).send(heardAlbum)
    }
}