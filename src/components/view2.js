import React, {useState} from 'react'
import AlbumList from './albumList'
import NewAlbum from './newAlbum'

const View2 = () => {
    const [add, setAdd] = useState(false)

  

    return (
        <div className='view2'>
            <AlbumList setAdd={setAdd}/>
            <NewAlbum setAdd={setAdd} add={add} />
        </div>
    )
}

export default View2