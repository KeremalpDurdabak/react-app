import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import logo from "../../yeni-logo-dark.png"

export default function Product(props) {
  return (
    <Container className = "productCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/300/200" />
        <Card.Body>
          <Card.Title>Product {props.pId}</Card.Title>
          <Card.Text>
            A brief description about the details of the Product.
          </Card.Text>
          <Button variant="primary">Inspect</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
