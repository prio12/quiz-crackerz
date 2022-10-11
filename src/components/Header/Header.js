import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Web Testy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item style={{ textDecoration: 'none', margin:'10px' }} as={Link} to='/'>Topics</Nav.Item>
            <Nav.Item style={{ textDecoration: 'none', margin:'10px' }} as={Link} to='/statistics'>Statistics</Nav.Item>
            <Nav.Item style={{ textDecoration: 'none', margin:'10px' }} as={Link} to='/blogs'>Blogs</Nav.Item>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;