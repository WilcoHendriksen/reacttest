import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" exact to="/login" activeClassName="active">login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" exact to="/logout" activeClassName="active">logout</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" exact to="/user/Wilco" activeClassName="active">Wilco</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Header;