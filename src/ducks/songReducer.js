const initialState = {
    albumSongs: []
}

const SET_ALBUM_SONGS = "SET_ALBUM_SONGS"

export function setAlbumSongs (albumSongs) {
    return {
        type: SET_ALBUM_SONGS, 
        payload: albumSongs
    }
}

export default function songReducer (state = initialState, action) {
    switch(action.type) {
        case SET_ALBUM_SONGS:
            return {...state, albumSongs: [...state.albumSongs, action.payload]}
        default:
            return state
    }
}