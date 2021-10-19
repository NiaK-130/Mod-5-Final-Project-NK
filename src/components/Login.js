import React, { useState } from 'react'

export default function Login({login}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    
    function handleSubmitLogin(e) {
        e.preventDefault()
        login(username, password)
    }

    return (
        <div className="Login">

            <form onSubmit={(e) => handleSubmitLogin(e)}>
                <input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

