import { connect } from 'react-redux'
import Song from './song'
import { setAlbumSongs } from '../ducks/songReducer'
import {setAlbumList} from '../ducks/albumReducer'
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
        const {id} = props.match.params
        e.preventDefault()
        try{
            await axios.post('/album/songs/add', {song, id})
            props.setAlbumSongs(+id)
        }
        catch(err) {
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
                    <div>
                        <section className='album'>
                            <img src={album[0].img_url} alt={`${album[0].title} album cover`} className='cover-art' />
                            <p><b>Title: </b>{album[0].title}</p>
                            <p><b>Artist: </b>{album[0].artist}</p>
                            <p><b>Genre: </b>{album[0].genre}</p>
                        </section>
                        <ol>
                            {list}
                        </ol>
                        <section>
                            <h3> New Song </h3>
                            <form>
                                <input placeholder='Song Title'
                                    onChange={e => setSong(e.target.value)}
                                    value={song} />
                                <button onClick={addSong} > Add Song </button>
                            </form>
                        </section>
                    </div>
                    : <div> Loading </div>
            }

        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setAlbumSongs, setAlbumList })(AlbumSongs)  