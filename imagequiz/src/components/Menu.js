import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Nav";

const Menu = () =>{
  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Image Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar nav" />
        <Navbar.Collapse id="basic-navbar nav">
          <Nav className="me-auto">
            <Nav.Link href="#/register">Register</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;