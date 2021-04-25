import React from 'react'
import { Nav } from '../../../styled/styled'
import logo from './../../../assets/web-logo.png'
import "./NavbarTop.css"
export default function NavbarTop() {
    return (
        <div id="head" >
            <Nav className="navbar navbar-dark" to="/">
                    <img width="40px" src={logo} alt=""></img>
            </Nav>
        </div>
    )
    
}
