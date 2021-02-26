
module.exports = {
    addAlbum: async (req, res) => {
        const db = req.app.get('db')
        const {title, artist, genre, imgUrl} = req.body
        const {id} = req.session.user
        const userAlbum = await db.add_album([title, artist, genre, imgUrl, id])
        return res.status(200).send(userAlbum)
    },

    getUserAlbums: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const userAlbums = await db.get_albums([id])
        return res.status(200).send(userAlbums)
    },

    deleteAlbum: async (req, res) => {
        const db = req.app.get('db')
        const {albumId} = req.body
        const newList = await db.delete_album([albumId])
        return res.status(200).send(newList)
    },

    albumHeard: async (req, res) => {
        const db = req.app.get('db')
        const {albumId} = req.body
        const {id} = req.body.session.user
        const heardAlbum = await db.updateHeard([id, albumId])
        return res.status(200).send(heardAlbum)
    }
}