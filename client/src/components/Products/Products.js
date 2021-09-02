import React from 'react';
import './Products.css';
import Sidebar from './Sidebar/Sidebar';
import ProductBox from './ProductBox/ProductBox';
import {
    BrowserRouter as Router,
} from "react-router-dom";

export default function Products() {
    return (
        <div className='products-container'>
            <Router>
                <Sidebar />
                <ProductBox />
            </Router>
        </div>
    )
}
