import React, { useState } from 'react'
import { setAlbumList } from '../ducks/albumReducer'
import { connect } from 'react-redux'
import axios from 'axios'

const NewAlbum = (props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const addAlbum = async (e) => {
        e.preventDefault()
        try {
            const album = await axios.post('/user/albums/add', { title, artist, genre, imgUrl })
            props.setAlbumList()
        }
        catch {
            alert('Failed To Add Album')
        }
        props.setAdd(false)
        setTitle('')
        setArtist('')
        setGenre('')
        setImgUrl('')
    }

    const noAdd = (e) => {
        e.preventDefault()
        props.setAdd(false)
    }

    return (
        <form className={props.add ? 'open' : ''}>
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
            <button onClick={noAdd} className='close' > Close </button>
        </form>
    )
}

const mapStateToProps = state => {
    const { user, albumList } = state
    return {
        albumList: albumList.albumList,
        user: user.user
    }
}

export default connect(mapStateToProps, { setAlbumList })(NewAlbum)