import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Emp Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="insert" className="text-light">
              Insert
            </Nav.Link>
            <Nav.Link as={Link} to="display" className="text-light">
              Display
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNav;
