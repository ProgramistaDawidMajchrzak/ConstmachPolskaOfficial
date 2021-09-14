import React, { useState } from 'react';
import './Sidebar.css';
import SidebarElement from './SidebarElement/SidebarElement';
import * as ProductsData from '../ProductsData.json';

export default function Sidebar() {

    const [subNav, setSubNav] = useState('');
    return (
        <>
            <div className="sidebar-container">
                <div className="sidebar-box">
                    {ProductsData.default.map(product =>
                        < SidebarElement
                            subNav={subNav}
                            setSubNav={setSubNav}

                            title={product.title}
                            key={product.id}
                            product={product}
                        />)}
                </div>
            </div>

        </>
    )
}
