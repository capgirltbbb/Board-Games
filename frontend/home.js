import React from 'react'
import Header from './Header';
import { Switch, Route } from "react-router-dom";

export default function home() {
    return (
        <div>
            <Header/>
            <h3>an Immersive social media enviornment centered on the love of the board game.</h3>
            <Switch>
            <Route exact path='/' render/>
            <Route exact path='/' render/>
            <Route exact path='/' render/>
            </Switch>
        </div>
    )
}

export default home;
