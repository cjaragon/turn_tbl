import React, {useState, useEffect} from 'react'
import {setAlbumList} from '../ducks/albumReducer'
import {connect} from 'react-redux'
import axios from 'axios'

const AlbumList = (props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        axios.get('/user/albums')
        .then (res => setAlbumList(res.data))
    })

    const addAlbum = async (e) => {
        e.preventDefault()
        try {
            const album = await axios.post('/user/albums/add', {title, artist, genre, imgUrl})
            setAlbumList(album.data)
        }
        catch {
            alert('Failed To Add Album')
        }
    }

    return (
        <div>
            <p>Album List</p>

            <form>
                <h1>New Album</h1>
                <h3> Album Title: </h3>
                <input placeholder=' Title '
                    onChange={e => setTitle(e.target.value)}
                    value={title} />
                <h3> Artist: </h3>
                <input placeholder=' Artist '
                    onChange={e => setArtist(e.target.value)}
                    value={artist} />
                <h3> Genre: </h3>
                <input placeholder=' Genre '
                    onChange={e => setGenre(e.target.value)}
                    value={genre} />
                <h3> Album Art </h3>
                <input placeholder=' URL '
                    onChange={e => setImgUrl(e.target.value)}
                    value={imgUrl} />
                <button onClick={addAlbum} > Add Album </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {setAlbumList})(AlbumList)