import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

const AlbumSongs = (props) => {
    const album = props.albumList.albumList.filter((album) => album.album_id === +props.match.params.id)
    const { title, artist, genre, img_url } = album[0]

    return (
        <div>
            <img src={img_url} alt={`${title} album cover`} className='cover-art' />
            <p><b>Title: </b>{title}</p>
            <p><b>Artist: </b>{artist}</p>
            <p><b>Genre: </b>{genre}</p>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps,)(AlbumSongs)  