import React, {useState, useEffect} from 'react'
import {setUser} from '../ducks/userReducer'
import {connect} from 'react-redux'
import axios from 'axios'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (e) => {
        e.preventDefault()
        try {
            const user = await axios.post('/auth/login', {email, password})
            console.log(user)
            setUser(user.data)
            props.history.push('/albums')
        } 
        catch {
            alert('failed login attempt')
        }
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const user = await axios.post('/auth/register', {email, username, password})
            console.log(user)
            setUser(user.data);
            props.history.push('/albums')
        }
        catch {
            alert('failed register attempt')
        }
    }


    return (
        <div>
            <form>
                <input placeholder='Username' 
                    onChange={e => setUsername(e.target.value)}
                    value={username} />
                <input placeholder='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email} />
                <input placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    value={password} />
                <button class='login-button'
                    onClick={login}> Log In </button>
                <button class='login-button'
                    onClick={register}> Register </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {setUser})(Login)