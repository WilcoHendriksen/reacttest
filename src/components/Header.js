import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/login">login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/logout">logout</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/user/Wilco">Wilco</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">login</NavLink></li>
                    <li><NavLink to="/logout">logout</NavLink></li>
                    <li><NavLink to="/user/Wilco">Wilco</NavLink></li>
                </ul>
            </div>
        )
    }

}

export default Header;