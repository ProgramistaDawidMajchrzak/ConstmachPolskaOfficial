import React from 'react';
import './SidebarElement.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {
    NavLink
} from "react-router-dom";




export default function SidebarElement({ title, product, subNav, setSubNav }) {

    return (
        <div className='sidebar-element'>
            <div onClick={() => setSubNav(title)} className={`sidebar-element-title ${subNav === title && 'active-title'}`}>
                <h5>{title}</h5>
                {product.elements && subNav === title ? <ArrowDropDownIcon className='sidebar-element-arrow' /> : <ArrowRightIcon className='sidebar-element-arrow' />}
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
                    <NavLink key={item.id} to={item.path} >
                        <div>
                            {item.title}
                            <div className="sidebar-element-subnav-items">
                                {item.elements && item.elements.map(subItem =>
                                    <NavLink key={subItem.id} to={subItem.path}>
                                        <div className='sidebar-element-subnav-subItem'>
                                            {subItem.title}
                                        </div>
                                    </NavLink >
                                )}
                            </div>
                        </div>
                    </NavLink >
                )
            }
        </>
    )
}

