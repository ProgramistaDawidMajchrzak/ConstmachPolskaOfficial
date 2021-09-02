import React from 'react';
import './ProductBox.css';
import {
    Switch,
    Route
} from "react-router-dom";

export default function ProductBox() {
    return (
        <div className='product-box'>
            <Switch>
                <Route path="/STATIONARY60">
                    <p>STATIONARY 60</p>
                </Route>
                <Route path="/STATIONARY100">
                    <p>STATIONARY 100</p>
                </Route>
                <Route path="/STATIONARY120">
                    <p>STATIONARY 120</p>
                </Route>
            </Switch>
        </div>
    )
}
