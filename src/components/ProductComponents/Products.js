import React from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

export default function Products(props) {

  return (
    <Container className="productPage">
<Row>
    <Col><Product/></Col>
    <Col><Product/></Col>
    <Col><Product/></Col>
  </Row>

  <Row>
    <Col><Product/></Col>
    <Col><Product/></Col>
    <Col><Product/></Col>
  </Row>

    </Container>
  );
}
