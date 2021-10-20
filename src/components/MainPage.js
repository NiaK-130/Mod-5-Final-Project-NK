import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup'
import {
    BrowserRouter as Router,
    Link, Switch, Route

} from 'react-router-dom'


export default function MainPage({ login, signup }) {

    return (

        <div>

                <div>

                <img className="logo-img" src={process.env.PUBLIC_URL + '/logo.png'} alt="modular-logo" />

                <div>

                    <Router>

                        <div>

                            <Link to="/login">
                                <button className="sign-in-button" > Sign In </button>
                            </Link>


                            <Link to="/signup">
                                <button className="sign-up-button"> Sign Up </button>
                            </Link>

                        </div>

                        <Route exact path="/login">
                            <Login login={login} />
                        </Route>


                        <Route exact path="/signup">
                            <Signup signup={signup} />
                        </Route>

                    </Router> 

                    <div>
                        <img className="homepage1-img" src={process.env.PUBLIC_URL + '/homebanner1.png'} alt="modular-logo" />
                        <h1 className="hp-img-1-text"> Find Inspiration</h1>
                    </div>

                </div>






            </div>

        </div>


    )

}

