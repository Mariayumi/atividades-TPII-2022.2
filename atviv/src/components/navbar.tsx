import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import "./navbar.css"

function NavBar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar  bg="light" expand={expand} className="mb-3 navbar">
          <Container fluid className="nav">
            <Navbar.Brand href="/registro-hospedagem">Atlantis</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>

              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown title="Clientes" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item href="/clientes" className="nome">Lista de clientes</NavDropdown.Item>
                        <NavDropdown.Item href="/cadastro-cliente" className="nome">Cadastro de cliente</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/registro-hospedagem" >Registro de hospedagem</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;