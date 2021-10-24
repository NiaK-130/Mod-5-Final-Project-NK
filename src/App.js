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
  Link, Switch, Route

} from 'react-router-dom'
import Ideasdisplay from './components/Ideasdisplay';
import axios from 'axios';
import { Professionalsdisplay } from './components/Professional-Landing-page/Professionalsdisplay';
import {Search} from './components/Search/Search';
import styles from './App.module.css'
import logo from '../src/assets/logo.png';
import {Loader} from './components/Loader';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';


const GlobalStyle = createGlobalStyle`
* {
      margin: 0;
      padding:0;
      box-sizing: border-box;
        // position: relative;
        // transition: transform 0.2s;
    
 
      
      
}

// :hover {
//   cursor:pointer;
//   transform: scale(1.008);
// } 



body{
  font-family: san-serif;
}
`;



const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;


`;


function App() {

  const production = "https://latest-modular-backend.herokuapp.com/"
  const development = "http://localhost:3002/"
  const url = (process.env.NODE_ENV ? production : development)


  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()

  const [images, setImages] = useState("");
  const [result, setResult] = useState([]);



  useEffect(() => {
    fetchImages();
   
  }, [])

  const fetchImages = () => {

    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/search/photos?per_page=30&query=`+images+`&client_id=${accessKey}&count=30`)
      .then(res => {console.log(res);
        setResult(res.data.results)
      });
        
        // setResult([...images, ...res.data.results]))
  
  }



  //axios
  //.get(`${apiRoot}/search/photos?page=1&page=2&per_page=40&query=interior&client_id=${accessKey}&count=10`)
  //.then(res => setImages([...images, ...res.data.results]))

  // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
  //.then(res => setImages([...images, ...res.data]))

  // .get(`${apiRoot}/search/photos?page=1&page=2&per_page=40&query=interior&client_id=${accessKey}`)


  // axios
  // .get(`${apiRoot}/search/photos?query=home-interior&client_id=${accessKey}&count=40`)
  // .then(res => setImages([...images, ...res.data.results]))

  //  axios
  // .get(`${apiRoot}/search/photos?query=home-interior&client_id=${accessKey}&count=30`)
  // .then(res => setImages([...images, ...res.data]))
  // }, [])


  // .get(`${apiRoot}/search/photos?query=home-interior&client_id=${accessKey}&count=10`)
  //.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
  //get(`${apiRoot}/photos?query=interior-design&client_id=${accessKey}&count=30`)




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
          console.log("hi" + data.jwt)
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




  function handleChange(event){
    setImages(event.target.value);

  }

  function handleSubmit(event){
    console.log(images);

  }


  return (

    <div className="App">
      {loggedIn ?
        <Router>
          <nav className="navbar-container">
            <div className={styles.appheaderbuttons}>
                <div className={styles.left}> 
                  <img src={logo} className={styles.logo} alt='logo'/>
                </div>
                
                

                <div className={styles.headerbuttons}>
                    <Link to="/ideasdisplay">
                      <button className="button is-normal" > Get Ideas </button>
                    </Link>
                    <Link to="/professionalsdisplay">
                      <button className="button is-normal" > Find Professionals </button>
                    </Link>
                    <Link to="/dashboard">
                      <button className="button is-normal" > Dashboard </button>
                    </Link>
                    <button className="button is-normal" onClick={logout}>Logout</button>
                   
                </div>

            </div>
            <hr></hr>
          </nav>


          <Route exact path="/login">
            <Dashboard />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          

    
          <Route exact path="/ideasdisplay">
            <Ideasdisplay />
            <div className={styles.ideasinputmain}>
              <div className={styles.ideasinput}>
                <input className = "input" onChange={handleChange} type="text" name="photo" placeholder="Search for Ideas"></input>
              </div>
              <div className={styles.ideasbutton}>
                <button className = "button is-light" onClick={handleSubmit} type = "submit"> Find Inspiration!</button>
              </div>
            </div>
            <InfiniteScroll dataLength={images.length}
                next={fetchImages}
                hasMore={true}
                loader={<Loader/>}
              
               >

            <GlobalStyle/>
            <WrapperImage>

           
             
              {result.map((image) => (

                  <Ideasdisplay url={image.urls.regular} key={image.id} />

                ))
              }
         

            </WrapperImage>

           
            </InfiniteScroll>
          </Route>
         

          <Switch>

          <Route path='/search' component={Search}/>

        
                <Route exact path="/professionalsdisplay" component={Professionalsdisplay}>

                    <Professionalsdisplay/>
            
                </Route> 

          </Switch>


        </Router> :

        <MainPage login={login} signup={signup} />


      }


    </div>


  );
}

export default App;


//className={styles.unsplashimages}