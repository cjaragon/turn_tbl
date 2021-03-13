import axios from 'axios'

const initialState = {
    albumSongs: []
}

const SET_ALBUM_SONGS = "SET_ALBUM_SONGS"

export function setAlbumSongs (id) {
    const albumSongs = axios.get(`/album/songs/${id}`)
    .then (res => res.data)
    return {
        type: SET_ALBUM_SONGS, 
        payload: albumSongs
    }
}

export default function songReducer (state = initialState, action) {
    switch(action.type) {
        case SET_ALBUM_SONGS + '_FULFILLED':
            return {...state, albumSongs: action.payload}
        case SET_ALBUM_SONGS + '_PENDING':
            return state
        default:
            return state
    }
}