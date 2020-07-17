import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Header from '../Header';
import Slider from '../SLider';
import Contacts from '../Contacts';
import Stories from '../Stories';
import Services from '../Services';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = 'App'>
                    <Header />
                    <Route path = '/' exact>
                        <Slider />
                    </Route>
                    <Route path = '/uslugi'>
                        <Services />
                    </Route>
                    <Route path = '/istorii'>
                        <Stories />
                    </Route>
                    <Route path = '/contacti'>
                        <Contacts />
                    </Route>
                </div>
            </Router>
            )
    }
}