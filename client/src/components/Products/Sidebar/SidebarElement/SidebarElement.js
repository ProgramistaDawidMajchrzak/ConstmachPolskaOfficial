import React from 'react';
import './SidebarElement.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
    Link
} from "react-router-dom";




export default function SidebarElement({ title, product, subNav, setSubNav }) {

    return (
        <div className='sidebar-element'>
            <div onClick={() => setSubNav(title)} className="sidebar-element-title">
                <h5>{title}</h5>
                {product.elements ? <ArrowDropDownIcon className='sidebar-element-arrow' /> : null}
            </div>
            <div className={`sidebar-element-subnav ${subNav === title ? 'show' : null}`}>
                {product.elements ? <SidebarElementSubNav product={product} /> : null}
            </div>
        </div>
    )
}

function SidebarElementSubNav({ product }) {
    return (
        <>
            {
                product.elements.map(item =>
                    <Link key={item.id} to={item.path}>
                        <div className='sidebar-element-subnav-item'>
                            <h5>{item.title}</h5>
                        </div>
                    </Link >
                )
            }
        </>
    )
}
