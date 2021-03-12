import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {setAlbumList} from '../ducks/albumReducer'
import {withRouter} from 'react-router-dom'

const Album = (props) => {

    const {title,artist,genre, cover, id, heard } = props

    const handleHeard = async (id) => {
        try {
            await axios.put(`/user/albums/${id}`)
            console.log(id)
            props.setAlbumList()
        }
        catch(err) {
            console.log(err)
        }
    }

    const deleteAlbum = async (id) => {
        try {
            await axios.delete(`/user/albums/${id}`)
            console.log(id)
            props.setAlbumList()
        }
        catch(err) {
            console.log(err)
        }
    } 



    return (
        <div className={heard ? 'album heard' : 'album'}>
            <img src={cover} alt={`${title} cover`} className='cover-art'/>
            <section className='album-info' >
                <p><b>Title: </b>{title}</p>
                <p><b>Artist: </b>{artist}</p>
                <p><b>Genre: </b>{genre}</p>
            </section>
            <section className='buttons'>
                <button className='album-button'
                    onClick={() => props.history.push(`/albums/${id}`)} > View </button>
                <button className='album-button'
                    onClick={() => handleHeard(id)} > Heard </button>
                <button className='album-button'
                    onClick={() => deleteAlbum(id) } > Delete </button>
            </section>
        </div>
    )
}

export default withRouter (connect(null, {setAlbumList})(Album))