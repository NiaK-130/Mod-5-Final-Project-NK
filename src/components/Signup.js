import React, { useState } from 'react';
import {useHistory} from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const production = ""
    const development = "http://localhost:3002/"
    const url = (process.env.NODE_ENV ? production : development)
    const history = useHistory();
       

    function handleSignupSubmit(e) {
        e.preventDefault();
        fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(username, password),
        })

            .then((r) => r.json())
            .then((data) => {
                history.push("/home");
            }
            );
    }

    return (

        <div>
            <form onSubmit={handleSignupSubmit}>
                Username:
                <input
                    className="login-inputs"
                    type="text"
                    id="username"
                    placeholder="Username"
                    //   autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                Password:
                {/* <label htmlFor="password">Password</label> */}
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    //   autoComplete="current-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>

    )
}

export default Signup