import React, { useEffect } from 'react';
// import data from './data/data.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainNavbar from './components/MainNavbar/MainNavbar';
import './App.css';

export default function App() {

    // useEffect(() => {
    //     console.log(data)
    // }, [])


    return (
        <>
            <Header />
            <Router>
                <MainNavbar />
                <Switch>

                </Switch>
            </Router>
        </>
    )
}
