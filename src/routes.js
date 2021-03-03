import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import AlbumList from './components/albumList'
import AlbumSongs from './components/albumSongs'

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/albums' component={AlbumList} />
        <Route path='/albums/:title' component={AlbumSongs} />
    </Switch>
)