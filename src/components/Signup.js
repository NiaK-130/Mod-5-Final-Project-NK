import React, { useState } from 'react';


export default function Signup({signup}) {  

    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [bio, setBio] = useState('')
    const [avatar, setAvatar] = useState('')

    function handleSubmitSignup(e) {
        e.preventDefault()
        signup(newUsername, newPassword, bio, avatar)
    }

    return (
        <div className="signup-box">

            <form onSubmit={(e) => handleSubmitSignup(e)}>

            <p className = "sign-up-text"><label>Sign Up </label></p>
                
                <div className = "sign-up-header">
                <p><label>Email :
                <input className = "sign-up-email"
                    placeholder="email"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                /> </label></p>
                </div>


                <div className = "sign-up-header">
                <p><label>Password :
                <input className = "sign-up-password"
                    placeholder="password"
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />  </label></p>
                </div>


                <div className = "sign-up-header">
                <p><label> Profile Picture:
                <input className = "sign-up-password"
                    placeholder="Add Profile Picture"
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                /> </label></p>
                 </div>


                 <div className = "sign-up-header">
                 <p><label> Full Name:
                <input className = "sign-up-password"
                    placeholder="full name"
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                /> </label></p>
                </div>

       

                <button className="sign-up-page-button" type="submit">Join now</button>
            </form>
        </div>
    )

}