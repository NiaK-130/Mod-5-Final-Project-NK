import React from 'react'
import Login from './Login';
import Signup from './Signup'
import {
    BrowserRouter as Router,
    Link, Route

} from 'react-router-dom';
import styles from './MainPage.module.css';
// import logo from '../assets/logo.png';
import logonew from '../assets/logonew.png';
import logonewtwo from '../assets/logonewtwo.png';
import logonewthree from '../assets/logonewthree.png';
import homepagemoduleone from '../assets/homepagemoduleone.png';
import homepagemoduletwo from '../assets/homepagemoduletwo.png';
import homepagemodulethree from '../assets/homepagemodulethree.png';
import { HomePageOne } from './HomePage/HomePageOne';
import { HomePageTwo } from './HomePage/HomePageTwo';
import { HomePageThree } from './HomePage/HomePageThree';


export default function MainPage({ login, signup }) {

    return (
        <div>
               <div>
                {/* <img className="logo-img" src={process.env.PUBLIC_URL + '/logo.png'} alt="modular-logo" /> */}
                {/* <img src={logo} className={styles.logo} alt='logo'/> */}
                <div>
                 <Router>
                     <div className={styles.mainpagebuttons}>
                             <div className={styles.left}>
                                     <img src={logonew} className={styles.logonew} alt='logo'/>
                                     
          
                            </div>
                            <div className={styles.newleft}>
                            <img src={logonewtwo} className={styles.logonewtwo} alt='logo'/>
                            </div>


                            <div className={styles.right}>
                                    <Link to="/login">
                                    <button className="button is-black is-medium">Sign In </button>
                                        {/* <button className="sign-in-button" > Sign In </button> */}
                                    </Link>
                                    <Link to="/signup">
                                    <button className="button is-black is-medium"> Sign Up </button>
                                        {/* <button className="sign-up-button"> Sign Up </button> */}
                                    </Link>
                            </div>
                        </div>
                        <Route exact path="/login">
                            <Login login={login} />
                        </Route>
                        <Route exact path="/signup">
                            <Signup signup={signup} />
                        </Route>
                    
                    <div>
                        <Route exact path="/">
                       <HomePageOne homepagemoduleone={homepagemoduleone} />
                       </Route>
                    </div>
                    <div>
                        <Route exact path="/">
                       <HomePageTwo homepagemoduletwo={homepagemoduletwo} />
                       </Route>
                    </div>
                    <div>
                        <Route exact path="/">
                       <HomePageThree homepagemodulethree={homepagemodulethree} />
                       </Route>
                    </div>
                    </Router> 
                </div>
            </div>
        </div>

    )
}

