import React, { useEffect } from 'react'
import { setAlbumList } from '../ducks/albumReducer'
import Album from './album'
import { connect } from 'react-redux'


const AlbumList = (props) => {
    

    useEffect(() => {
        props.setAlbumList()
    }, [])

    

    const list = props.albumList.map(album => {
        const { id, title, artist, genre, img_url, heard } = album
        return <Album key={id} title={title} artist={artist} genre={genre} cover={img_url} id={id} heard={heard} />
    })

    return (
      
        <div className='album-list'>
            <h1>{props.user.username}'s Album List</h1>
            <button className='open' onClick={() => props.setAdd(true)} > Add Album </button>
            <div>
                {list}
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    const { user, albumList } = state
    return {
        albumList: albumList.albumList,
        user: user.user
    }
}

export default connect(mapStateToProps, { setAlbumList })(AlbumList)