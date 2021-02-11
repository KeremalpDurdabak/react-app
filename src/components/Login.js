import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles.css"
import jwt from "jsonwebtoken"
import axios from "axios"

export default function Login(props) {

    const onFormSubmit = (e) => {
        e.preventDefault()
        const data = {email: e.target.email.value, password: e.target.password.value}
        var token = jwt.sign({data},"secretpass")
        axios.post("/exampleRoute", token)
        .then(response => {console.log("success!")})
        .catch(error => {console.log("No route path has been configured yet.")})
        const fakeAuthData = {email: "admin@root.com", password: "123456"}
        if(data.email === fakeAuthData.email && data.password === fakeAuthData.password){
            props.navHandler("products")
        }
    }

  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button id="loginSubmitButton" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
