import React from "react"
import Login from "./Login"
import Register from "./Register"
import Container from "react-bootstrap/Container"
import Products from "./ProductComponents/Products"
import "../styles.css"

export default function Main(props){

    const renderEntry = () => {
        if(props.type === "login"){
            return <Login navHandler = {props.navHandler}/>
        }
        if (props.type === "register"){
            return <Register navHandler = {props.navHandler}/>
        }
        if (props.type === "products"){
            return <Products/>
        }
    }

    return(
    <Container md="auto" className="mainContainer">
        <h2>{props.type.charAt(0).toUpperCase() + props.type.slice(1)}</h2>
        {renderEntry()}
    </Container>)
}