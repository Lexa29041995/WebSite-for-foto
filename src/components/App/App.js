import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Header from '../Header';
import Slider from '../SLider';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = 'App'>
                    <Header />
                    <Slider />
                </div>
            </Router>
            )
    }
}