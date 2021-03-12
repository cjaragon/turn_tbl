import React, { useState, useEffect } from 'react'
import { setAlbumList } from '../ducks/albumReducer'
import Album from './album'
import { connect } from 'react-redux'


const AlbumList = (props) => {
    // const [title, setTitle] = useState('')
    // const [artist, setArtist] = useState('')
    // const [genre, setGenre] = useState('')
    // const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        props.setAlbumList()
    }, [])

    // const addAlbum = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const album = await axios.post('/user/albums/add', { title, artist, genre, imgUrl })
    //         props.setAlbumList()
    //     }
    //     catch {
    //         alert('Failed To Add Album')
    //     }
    //     setTitle('')
    //     setArtist('')
    //     setGenre('')
    //     setImgUrl('')
    // }

    const list = props.albumList.map(album => {
        const { id, title, artist, genre, img_url, heard } = album
        return <Album key={id} title={title} artist={artist} genre={genre} cover={img_url} id={id} heard={heard} />
    })

    return (
        // <div>
            <div className='album-list'>
                <h1>{props.user.username}'s Album List</h1>
                <button onClick={() => props.setAdd(true)} > Add Album </button>
                {list}
            </div>
            //  <form>
            //     <h1>New Album</h1>
            //     <h3> Album Title: </h3>
            //     <input placeholder=' Title '
            //         onChange={e => setTitle(e.target.value)}
            //         value={title} />
            //     <h3> Artist: </h3>
            //     <input placeholder=' Artist '
            //         onChange={e => setArtist(e.target.value)}
            //         value={artist} />
            //     <h3> Genre: </h3>
            //     <input placeholder=' Genre '
            //         onChange={e => setGenre(e.target.value)}
            //         value={genre} />
            //     <h3> Album Art </h3>
            //     <input placeholder=' URL '
            //         onChange={e => setImgUrl(e.target.value)}
            //         value={imgUrl} />
            //     <button onClick={addAlbum} > Add Album </button>
            // </form> 
        // </div>
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