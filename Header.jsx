import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Sparkles, Menu } from 'lucide-react'
import './Header.css'

const Header = ({ logo = 'NexusHub', menuItems = [] }) => {
  const defaultMenuItems = ['Início', 'Serviços', 'Sobre', 'Contato']

  return (
    <Navbar expand="lg" className="header-custom shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <Sparkles size={28} color="#4A90E2" />
          <span className="fw-bold fs-4">{logo}</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar">
          <Menu size={24} />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-2">
            {(menuItems.length ? menuItems : defaultMenuItems).map((item, index) => (
              <Nav.Link key={index} href={`#${item.toLowerCase()}`} className="nav-link-custom">
                {item}
              </Nav.Link>
            ))}
            <Button variant="primary" className="ms-lg-3 btn-custom-primary">
              Começar Agora
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header