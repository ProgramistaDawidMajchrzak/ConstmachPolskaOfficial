import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import MainNavbar from './components/MainNavbar/MainNavbar';
import './App.css';
import Home from './components/Home/Home.js';
import Products from './components/Products/Products.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';


export default function App() {

    return (
        <>

            <Header />
            <Router>
                <MainNavbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
            <Footer />
        </>
    )
}
