import { connect } from 'react-redux'
import Song from './song'
import { setAlbumSongs } from '../ducks/songReducer'
import { setAlbumList } from '../ducks/albumReducer'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AlbumSongs = (props) => {
    const [song, setSong] = useState('')

    const album = props.albumList.albumList.length ? props.albumList.albumList.filter((album) => album.album_id === +props.match.params.id) : []

    useEffect(() => {
        props.setAlbumList()
        props.setAlbumSongs(+props.match.params.id)
        console.log(props.songs.albumSongs)
    }, [])

    const addSong = async (e) => {
        const { id } = props.match.params
        e.preventDefault()
        try {
            await axios.post('/album/songs/add', { song, id })
            props.setAlbumSongs(+id)
        }
        catch (err) {
            console.log(err)
        }
        setSong('')
    }

    const list = props.songs.albumSongs.map(song => {
        const { song_id, name } = song
        return <Song key={song_id} title={name} />
    })

    return (

        <div>
            {
                props.albumList.albumList.length ?
                    <div className='view3'>
                        <section className='album'>
                            <img src={album[0].img_url} alt={`${album[0].title} album cover`} className='cover-art' />
                            <p className='info'><b>Title: </b>{album[0].title}</p>
                            <p className='info'><b>Artist: </b>{album[0].artist}</p>
                            <p className='info'><b>Genre: </b>{album[0].genre}</p>
                        </section>
                        <section>
                            <form>
                                <input placeholder='Song Title'
                                    onChange={e => setSong(e.target.value)}
                                    value={song} />
                                <button onClick={addSong} > Add Song </button>
                            </form>
                        </section>
                        <section className='list'>
                            <ol>
                                {list}
                            </ol>
                        </section>
                    </div>
                    : <div> Loading </div>
            }

        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setAlbumSongs, setAlbumList })(AlbumSongs)