import React, { useState } from 'react'

function Child({isLoggedIn, setIsLoggedIn}) {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    function handleLogIn(event) {
        event.preventDefault();
        if (user.username && user.password) {
            setIsLoggedIn(true);
        }
    }
  return (
    <div>
        {
            isLoggedIn ? <div>You are logged in!</div>:    
            <form onSubmit={handleLogIn}>
                <div className='form-component'>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value })}
                    />
                </div>
                <div className='form-component'>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value })}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        }
    </div>
  )
}

export default Child;