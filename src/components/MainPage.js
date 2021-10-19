import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup'
import {
    BrowserRouter as Router,
    Link, Route

} from 'react-router-dom'


export default function MainPage() {

    return (
        <div className="Login">


            <div>

                <Router>
                       
                            <img className="logo-img" src={process.env.PUBLIC_URL + '/logo.png'} alt="modular-logo" />

                            <div>
                            <Link to="/login">
                                <button className="sign-in-button" > Sign In </button>
                            </Link>


                            <Link to="/signup">
                                <button className="sign-up-button"> Sign Up </button>
                            </Link>
                            </div>


                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/signup">
                        <Signup />
                    </Route>



                </Router>

            </div>
        </div>


    )

}

