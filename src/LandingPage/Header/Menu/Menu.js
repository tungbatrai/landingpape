import logo from "../../../assect/Logo.jpg";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./Menu.scss";

function Menu() {
  return (
   <div id= "menu">
      <div className="container pl-0 pr-0">
      <Navbar bg="white" expand="lg" className="pr-0 pl-0">
        <Container className="pr-0 pl-0">
          <Navbar.Brand href="#home" >
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <div className="row w-100 d-flex align-items-center">
              <div className="col-3"></div>
              <div className="col-7 ">
                <Nav className="me-auto">
                  <Nav.Link href="#home" active>Home</Nav.Link>
                  <Nav.Link href="#link">How it works</Nav.Link>
                  <Nav.Link href="#link1">Reviews</Nav.Link>
                  <Nav.Link href="#link2">Works</Nav.Link>
                  <Nav.Link href="#link3">FAQs</Nav.Link>
                </Nav>
              </div>
              <div className="col-lg-2 col-sm-12  col-8 btn btn-primary menu-button" ><div className="button-content">Get started</div></div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
   </div>
  );
}
export default Menu;
