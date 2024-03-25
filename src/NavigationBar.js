import { Nav, Navbar, Container} from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar className="py-5 border">
      <Container>
        <Navbar.Brand href="#home">Samenda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;