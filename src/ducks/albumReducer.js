import axios from 'axios'

const initialState = {
    albumList: []
}

const SET_ALBUM_LIST = "SET_ALBUM_LIST"

export function setAlbumList() {
    const albumList = axios.get('/user/albums').then(res => res.data)
    return {
        type: SET_ALBUM_LIST,
        payload: albumList
    }
}

export default function albumReducer (state = initialState, action) {
    switch(action.type) {
        case SET_ALBUM_LIST + '_FULFILLED':
            return {...state, albumList: [...state.albumList, ...action.payload ]}
        case SET_ALBUM_LIST + '_PENDING':
            return state
        default:
            return state
    }
}