module.exports = {
    addSong: async (req, res) => {
        const db = req.app.get('db')
        const {song, id} = req.body
        console.log(req.body)
        const addSong = await db.add_song([song, id])
        return res.status(200).send(addSong)
    },

    getSongs: async (req, res) => {
        const db = req.app.get('db')
        const {albumId} = req.params
        const songs = await db.get_songs([albumId])
        return res.status(200).send(songs)
    }
}