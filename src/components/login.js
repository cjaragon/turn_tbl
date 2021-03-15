import React, { useState, useEffect } from 'react'
import { setUser } from '../ducks/userReducer'
import { connect } from 'react-redux'
import axios from 'axios'

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newUser, setNewUser] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        setNewUser(false)
        try {
            const user = await axios.post('/auth/login', { email, password })
            props.setUser(user.data)
            props.history.push('/albums')
        }
        catch {
            alert('failed login attempt')
        }
    }

    const register = async (e) => {
        e.preventDefault();
        setNewUser(false)
        try {
            const user = await axios.post('/auth/register', { email, username, password })
            props.setUser(user.data);
            props.history.push('/albums')
        }
        catch {
            alert('failed register attempt')
        }
    }

    const setUser = (e) => {
        e.preventDefault()
        setNewUser(true)
    }


    return (
        <div className='view1'>
            <section className='login'>
                <h3>Welcome to Turn-TBL!</h3>
                <h5>Log in or create an account to get started making your personal list of albums that you are interested in.</h5>
                <form>
                    <input className={ !newUser ? 'hide' : 'input'}
                        placeholder='Username'
                        onChange={e => setUsername(e.target.value)}
                        value={username} />
                    <input className='input'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                    <input className='input'
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        value={password} />
                    <button class='login-button'
                        onClick={ !email || !password ? null : login}> Log In </button>
                    {
                        !newUser
                        ?
                        <button className='login-button'
                            onClick={setUser}>New User</button>
                        :
                        <button class='login-button'
                            onClick={ register }> Register </button>
                    }
                </form>
            </section>
        </div>

    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setUser })(Login)