module.exports = {
    addSong: async (req, res) => {
        const db = req.app.get('db')
        const {name, albumId} = req.body
        const addSong = await db.add_song([name, albumId])
        return res.status(200).send(addSong)
    },

    getSongs: async (req, res) => {
        const db = req.app.get('db')
        const {albumId} = req.body
        const songs = await db.get_songs([albumId])
        return res.status(200).send(songs)
    }
}