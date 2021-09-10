import React, { useEffect } from 'react';
// import data from './data/data.json';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainNavbar from './components/MainNavbar/MainNavbar';
import './App.css';
import Home from './components/Home/Home.js';
import Products from './components/Products/Products.js';
import News from './components/News/News.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

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
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/news" component={News} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
            <Footer />
        </>
    )
}
