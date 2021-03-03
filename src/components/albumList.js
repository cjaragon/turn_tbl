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

    return (
        <div>
            <p>Album List</p>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {setAlbumList})(AlbumList)