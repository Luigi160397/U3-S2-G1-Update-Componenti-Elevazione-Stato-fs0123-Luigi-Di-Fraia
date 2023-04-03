import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.png";

const MyNavbar = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width={40} height={40} className="me-1" />
        EpiBooks
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
