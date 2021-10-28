// import './App.css';
import React, {
  useEffect,
  useState
} from 'react';
// import SigninHome from './components/SigninHome.js';
// import Signup from './components/Signup.js';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MainPage from "./components/MainPage";
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route

} from 'react-router-dom'
import Ideasdisplay from './components/Ideasdisplay';
import axios from 'axios';
import {
  Professionalsdisplay
} from './components/Professional-Landing-page/Professionalsdisplay';
import {
  Search
} from './components/Search/Search';
import styles from './App.module.css'
import logo from '../src/assets/logo.png';
import {
  Loader
} from './components/Loader';
import styled from 'styled-components';
import {
  createGlobalStyle
} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import 
  AddFavourites
 from './components/AddFavourites';

import logonew from '../src/assets/logonew.png';
import logonewtwo from '../src/assets/logonewtwo.png';

const GlobalStyle = createGlobalStyle `
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

















const WrapperImage = styled.section `
max-width: 70rem;
margin: 4rem auto;
display: grid;
grid-gap: 1em;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-auto-rows: 300px;


`;


function App() {

  const production = "https://latest-modular-backend.herokuapp.com/"
  const development = "http://localhost:3000/"
  const url = (process.env.NODE_ENV === "production" ? production : development)


  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({
    avatar:"",
    id:-1,
    bio:"",
    username:""
  })

  const [imagesAdd, setImagesAdd] = useState("");
  const [result, setResult] = useState([]);

  const [imagesmain, setImagesMain] = useState([]);
  const [fav, setfav] = useState('');


  // function deleteImage(ImageToDelete) {


  //   fetch(`images/${ImageToDelete}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => setImagesMain(imagesmain.filter(imagepassed => imagepassed.id !== ImageToDelete)));
  // }


function handleChange(event) {
  setImagesAdd(event.target.value);

}


function handleSubmit(event) {
  console.log(imagesAdd);

  

  const apiRoot = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_ACCESSKEY;
  axios
      .get(`${apiRoot}/search/photos?per_page=100&query=` + imagesAdd + `&client_id=${accessKey}&count=30`)
      .then(res => {
          console.log(res);
          setResult(res.data.results)
      });

   
}








  //axios
  //.get(`${apiRoot}/search/photos?page=1&page=2&per_page=40&query=interior&client_id=${accessKey}&count=10`)
  //.then(res => setImagesAdd([...imagesAdd, ...res.data.results]))

  // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
  //.then(res => setImagesAdd([...imagesAdd, ...res.data]))

  // .get(`${apiRoot}/search/photos?page=1&page=2&per_page=40&query=interior&client_id=${accessKey}`)


  // axios
  // .get(`${apiRoot}/search/photos?query=home-interior&client_id=${accessKey}&count=40`)
  // .then(res => setImagesAdd([...imagesAdd, ...res.data.results]))

  //  axios
  // .get(`${apiRoot}/search/photos?query=home-interior&client_id=${accessKey}&count=30`)
  // .then(res => setImagesAdd([...imagesAdd, ...res.data]))
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
        })
        .then((response) => {
            if (response.ok) {
                response.json()
                      .then((data) => {
                        console.log("data",data)
                        setLoggedIn(true)
                        setUser(data.user)
                    });
            } else {
                console.log("please log in ")
            }
        });
}, []);
 


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
                  response.json()
                      .then((data) => {
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
      localStorage.clear()
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
          })
          .then((response) => {


          
              if (response.ok) {
                  response.json()
                  
                      .then((data) => {
                          console.log("hi" + data.jwt)
                          console.log("print out", data.user)
                          setUser(data.user)
                          setLoggedIn(true)
                          localStorage.setItem("jwt", data.jwt);
                          console.log(data.user)
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



  // useEffect(() => {
  //     const token = localStorage.getItem("jwt");

  //     fetch(`${url}/api/v1/images`, {
  //             method: "GET",
  //             headers: {
  //                 Authorization: `Bearer ${token}`
  //             },
  //         })
  //         .then((r) => r.json())
  //         .then((imagesmain) => setImagesMain(imagesmain))
  // }, [])



  useEffect(() => {
    const token = localStorage.getItem("jwt");
    fetch(`${url}/api/v1/images`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
    .then((r) => {  
      if (r.ok) {
        r.json().then((images) => 
          {
            console.log("Dataimagesfdsf afsdf",images)
            setImagesMain(images)
          });
      }
    });
  }, []);



  function deleteImage(imageToDelete) {


    fetch(`images/${imageToDelete}`, {
      method: "DELETE",
    })
      .then(() => setImagesMain(imagesmain.filter(imagepassed => imagepassed.id !== imageToDelete)));
  }





  function addImage(title, image, imageDesc, by, tags, tagstwo, tagsthree) {

    fetch(`${url}api/v1/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                title: `${title}`,
                image: `${image}`,
                image_desc: `${imageDesc}`,
                by: `${by}`,
                tags: `${tags}`,
                tagstwo: `${tagstwo}`,
                tagsthree: `${tagsthree}`,
                user_id: `${user.id}`,
            }),

        })
        .then((r) => r.json())
        .then(imagepassed => {
            console.log("this is the images from app", imagesmain)
            setImagesMain([...imagesmain, imagepassed])
        });
}




  //newimageform - title, image, imageDesc, by, tags, tagstwo, tagsthree
  //migration params - :title, :image, :image_desc, :by, :tags, :tagstwo, :tagsthree, :user_id

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
                      <button className="button is-black" > Get Ideas </button>
                    </Link>
                    <Link to="/professionalsdisplay">
                      <button className="button is-black" > Find Professionals </button>
                    </Link>

                    <Link to="/dashboard">
                      <button className="button is-black" > Dashboard </button>
                    </Link>
                    <Route path="/">
                    <button className="button is-black" onClick={logout}>Logout</button>  
                    </Route>  
                </div>
            </div>
            
          </nav>


          <Route exact path="/login">
            <Dashboard user={user} imagesmain={imagesmain} addImage={addImage} deleteImage={deleteImage} />
          </Route>

          <Route exact path="/dashboard">
            
            <Dashboard user={user} imagesmain={imagesmain} addImage={addImage} deleteImage={deleteImage} />
            
          </Route>

        
          
          <Route exact path="/ideasdisplay">
            <Ideasdisplay favComponent={AddFavourites} addImage={addImage}/>


  <div className={styles.getideastext}>
            <h2>Design Matters, Find your Inspiration! </h2>
            </div>
          
            
            <div className={styles.images}>
            <img className="pdm-image" src={process.env.PUBLIC_URL + '/imgwork.png'} alt="modular-logo" />
            </div>

          
          
            <div className={styles.ideasinputmain}>
              <div className={styles.ideasinput}>
                <input className = "input" onChange={handleChange} type="text" name="photo" placeholder="Search for Ideas"></input>
              </div>
              <div className={styles.ideasbutton}>
                <button className = "button is-light" onClick={handleSubmit} > <i className="fas fa-search"></i></button>
              </div>
            </div>
            <InfiniteScroll dataLength={imagesAdd.length}
                // next={fetchImages}
                hasMore={true}
                // loader={<Loader/>}  
              >
            <GlobalStyle/>
            <WrapperImage>   
                 
              {result.map((image) => (
                

                  <Ideasdisplay addImage={addImage} url={image.urls.regular} key={image.id} favComponent={AddFavourites}/>
                 
                          
                ))}

              
        
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