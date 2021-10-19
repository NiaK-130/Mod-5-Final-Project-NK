import React, { useState } from 'react'

export default function Login({login}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    function handleSubmitLogin(e) {
        e.preventDefault()
        login(username, password)
    }

    return (
        <div className="signin-box">

            <form onSubmit={(e) => handleSubmitLogin(e)}>

            <p className = "sign-in-text"><label>Sign In </label></p>

                <div className = "email-header">
                <p><label>Email :
                 <input className = "login-email"
                    placeholder="email"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> </label></p>
                </div>

            <div className = "password-header">
            <p><label>Password :
              <input className = "login-password"
                    placeholder="password"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> </label></p>
                </div>

                <button className="sign-in-page-button" type="submit">Sign In </button>
            </form>
        </div>
    )

}


                 {/* <p><label>Email: <br /><input type="email" placeholder="email" name="email" value={username} onChange={(e) => setUsername(e.target.value)} /></label></p>

                <p><label>Password: <br /><input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label></p> */}