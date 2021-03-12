import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login'
import View2 from './components/view2'
import AlbumSongs from './components/albumSongs'

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/albums' component={View2} />
        <Route path='/albums/:id' component={AlbumSongs} />
    </Switch>
)