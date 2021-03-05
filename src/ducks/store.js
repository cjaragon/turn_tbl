import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import albumReducer from './albumReducer'
import songReducer from './songReducer' 

const rootReducer = combineReducers({
    user: userReducer,
    albumList: albumReducer,
    songs: songReducer

})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))