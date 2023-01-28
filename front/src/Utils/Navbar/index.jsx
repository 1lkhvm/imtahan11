import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
function Navbar() {
    

    return (
        <div className='navbar-container'>
            <nav>

                <div className='nav-logo'>
                    <img src="https://preview.colorlib.com/theme/educature/img/logo.png.webp" alt="" />
                </div>
                <div className='nav-menu'>
                    <ul>
                        <li>
                            <NavLink className="NavLink" to={"/"}>Home</NavLink>
                            <NavLink className="NavLink" to={"/Add"}>Add</NavLink>
                            <NavLink className="NavLink" to={"/"}>Courses</NavLink>
                            <NavLink className="NavLink" to={"/"}>Pages</NavLink>
                            <NavLink className="NavLink" to={"/"}>Blog</NavLink>
                            <NavLink className="NavLink" to={"/"}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar