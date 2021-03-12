import axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {logOut} from '../ducks/userReducer'
import {withRouter} from 'react-router-dom'


const Header = (props) => {

    const logOut = async () => {
        await axios.get('/auth/logout')
        .catch(err => console.log(err))
        props.logOut()
        props.history.push('/')
    } 

    return (
        <div className='header'>
            <h1> Turn-TBL </h1>
           {props.user.isLoggedIn ? <button className='log-out'
           onClick={logOut}>Log Out</button> : null}
        </div>
    )
}

const mapPropsToState = state => state

export default  withRouter (connect(mapPropsToState, {logOut})(Header))