import axios from 'axios'

const initialState = {
    user: {},
    isLoggedIn: false
}

const SET_USER = "SET_USER"

export function setUser (user) {
    return {
        type: SET_USER,
        payload: user
    }
}

const LOGOUT = "LOGOUT"

export function logOut () {
    return {
        type: LOGOUT,
        payload: initialState
    }
}

const GET_USER = "GET_USER"

export function getUser(){
    const user = axios.get('/auth/user').then(res => res.data)
    return {
        type: GET_USER,
        payload: user
    }
}

export default function userReducer (state = initialState, action) {
    switch(action.type) {
        case SET_USER: 
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT:
            return {...action.payload}
        case GET_USER + "_FULFILLED":
            return {...state, user: action.payload, isLoggedIn: true};
        default: 
            return state
    }
}