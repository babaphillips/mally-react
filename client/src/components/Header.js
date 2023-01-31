import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "../assets/header.jpg";

const Header = () => {
  return (
    <header>
      <Container>
        <Image
          className="d-block mx-auto img-fluid"
          src={Logo}
          style={{ width: "1000px", height: "350px" }}
          alt="cover"
        />
      </Container>

      <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="./menu">
                <i class="fa-solid fa-cannabis me-2"></i>
                Menu
              </Nav.Link>
              <Nav.Link href="./order">
                <i className="fas fa-user me-2" />
                How To Order
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
