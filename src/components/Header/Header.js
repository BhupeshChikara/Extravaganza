import React from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <h2><Link to="/">Extravaganza</Link></h2>
            <ul>
                <li><NavLink exact to='/'>Home </NavLink></li>
                <li><NavLink to='/MyContent'>MyContent</NavLink></li>
            </ul>
        </div>
    )
}

export default Header