import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import "../styles.css"
import logo from "../yeni-logo-dark.png"

export default function Header(props){
    return(
    <Navbar className="justify-content-between" bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt="logo"
        src={logo}
        width="200"
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>

    <Nav>
        <Button variant="info" onClick={(e) => props.navHandler("login")}>Login</Button>&emsp;
        <Button variant="success" onClick={(e) => props.navHandler("register")}>Register</Button>
    </Nav>
  </Navbar>)
}