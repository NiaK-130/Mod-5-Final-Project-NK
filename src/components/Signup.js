import React, { useState } from 'react'

export default function Signup({ signup }) {  

    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [bio, setBio] = useState('')
    const [avatar, setAvatar] = useState('')

    function handleSubmitSignup(e) {
        e.preventDefault()
        signup(newUsername, newPassword, bio, avatar)
    }

    return (
        <div className="Login">
            <form onSubmit={(e) => handleSubmitSignup(e)}>
                <input
                    placeholder="username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    placeholder="bio"
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <input
                    placeholder="avatar"
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />


                <button type="submit">Signup</button>
            </form>
        </div>
    )

}