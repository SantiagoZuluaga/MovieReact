import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from './components/nav'
import Home from './views/home'
import Movies from './views/movies'
import Series from './views/series'
import SizedBox from './components/sizedbox.js';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/movies">
                        <Movies />
                    </Route>
                    <Route exact path="/series">
                        <Series />
                    </Route>
                </Switch>
                <SizedBox></SizedBox>
            </BrowserRouter>
        </div>
    );
}