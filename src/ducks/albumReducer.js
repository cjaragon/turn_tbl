const initialState = {
    albumList: []
}

const SET_ALBUM_LIST = "SET_ALBUM_LIST"

export function setAlbumList(albumList) {
    return {
        type: SET_ALBUM_LIST,
        payload: albumList
    }
}

export default function albumReducer (state = initialState, action) {
    switch(action.type) {
        case SET_ALBUM_LIST:
            return {...state, user: action.payload}
        default:
            return state
    }
}