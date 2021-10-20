// import './App.css';
import React, { useEffect, useState } from 'react';
// import SigninHome from './components/SigninHome.js';
// import Signup from './components/Signup.js';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MainPage from "./components/MainPage";
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Link, Route

} from 'react-router-dom'
import Ideasdisplay from './components/Ideasdisplay';

function App() {

    const production = "https://latest-modular-backend.herokuapp.com/"
    const development = "http://localhost:3002/"
    const url = (process.env.NODE_ENV ? production : development)


    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState()

    useEffect(() => {
      const token = localStorage.getItem("jwt");
      console.log("token: " + token)
      // console.log(user.user.username)
      fetch(`${url}/api/v1/profile`, {
        method: "GET",
        headers: {
        Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setLoggedIn(true)
            setUser(data.user)
          });
        } else {
          console.log("please log in")
        }
      });
      });
      
      
      function signup(username, password, bio, avatar) {
        fetch(`${url}/api/v1/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${username}`,
              password: `${password}`,
              bio: `${bio}`,
              avatar: `${avatar}`,
            },
          }),
        })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              setUser(data.user)
              setLoggedIn(true)
              localStorage.setItem("jwt", data.jwt);
            });
          } else {
            console.log("form incorrectly filled out")
          }
        })
      }
    
      function login(username, password) {
        fetch(`${url}/api/v1/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            user: {
              username: `${username}`,
              password: `${password}`
            }
          })
        }).then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              console.log( "hi" + data.jwt )
              setUser(data.user)
              setLoggedIn(true)
              localStorage.setItem("jwt", data.jwt);
            });
          } else {
            console.log("wrong username/password")
          }
        })
      }
    
    
      function logout() {
        localStorage.clear()
        setUser(null)
        setLoggedIn(false)
      }
    

  return (

<div className="App">
{loggedIn ?
<Router>
  <nav className="navbar-container">
  <img className="logo-img" src={process.env.PUBLIC_URL + '/logo.png'} alt="modular-logo" />
  
  <hr></hr>
    
    <header>
    <Link to="/ideasdisplay">
      <button className="get-ideas-link" > Get Ideas </button>
      </Link> 
    <Link to="/professionalsdisplay">
      <button className="find-professionals-link" > Find Professionals </button>
      </Link>
      <Link to="/dashboard">
      <button className="dashboard-link" > Dashboard </button>
      </Link>



    <button className="logout-button" onClick={logout}>Logout</button>
    </header>
  </nav>
       <Route exact path="/login">
        <Dashboard  />

        {/* {user ? <h2 classname = "hello-user-text"> Hello {user.avatar} </h2>  : ''} */}
      </Route>

      <Route exact path="/ideasdisplay">
        <Ideasdisplay/>
        
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
</Router> :

<MainPage login={login} signup={signup} />


}
</div>


  );
}

export default App;

{/* <Link to="/login">
<button className="sign-in-button" > Sign In </button>
</Link> */}


//     <div className="app">

// {loggedIn ?
  
//  <Router>

      

//       <Route exact path="/">
//             <SigninHome />
//           </Route>

//           <Route exact path="/login">
//             <Login />
//           </Route>

//           <Route exact path="/home">
//             <Home />
//           </Route>

//           <Route exact path="/">
//               <Home currentUser={user}/>
//             </Route>

//           <Route exact path="/dashboard">
//             <Dashboard
//             />
//           </Route> 

//           <Route exact path="/profile">
//             <Profile />
//           </Route>

//     </Router> :

//       <LoginPage login={login} signup={signup}/>
//       }

//     </div>


{/* <Home currentUser={user}/> */}