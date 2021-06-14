import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
    return (
        <div>
            <h3>
                Login Work
            </h3>
            <div>
                <button className= 'btn btn-success'><Link to ='/'>Home</Link></button>
            </div>
        </div>
    )
}

export default Login
