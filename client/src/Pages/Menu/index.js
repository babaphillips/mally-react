import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../../components/Product";
import products from "../../products";

const Menu = () => {
  return (
    <>
      <h1 className="mx-auto ">WEEKLY MENU</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
          ;
        </Row>
      </Container>
    </>
  );
};

export default Menu;
