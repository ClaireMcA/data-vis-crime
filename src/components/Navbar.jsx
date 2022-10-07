import React, { Component } from "react";
import { Outlet, Link } from 'react-router-dom';


export default class Navbar extends Component {
    render () {
        return (
            <div>
                <nav>
                    <Link to="/belconnen">Belconnen</Link>
                    <Link to="/gungahlin">Gungahlin</Link>
                </nav>
                {/* <Outlet /> */}
            </div>
        )
    }
}