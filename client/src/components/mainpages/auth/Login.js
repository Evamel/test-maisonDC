import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput =  e =>{
        const {name, value} = e.target; void
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.herf ="/";
        }catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <input type="email" name="email" required 
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}
