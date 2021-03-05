

const Album = (props) => {


    const {title,artist,genre, cover, id, heard} = props

    return (
        <div className='album'>
            <img src={cover} alt={`${title} cover`} className='cover-art'/>
            <section className='album-info' >
                <p><b>Title: </b>{title}</p>
                <p><b>Artist: </b>{artist}</p>
                <p><b>Genre: </b>{genre}</p>
            </section>
            <section>
                
            </section>
        </div>
    )
}

export default Album