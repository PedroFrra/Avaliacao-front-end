import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Sparkles, Github, Linkedin, Instagram } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-custom py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <Sparkles size={28} color="#4A90E2" />
              <span className="fw-bold fs-4">NexusHub</span>
            </div>
            <p className="text-muted">
              Transformando ideias em soluções digitais inovadoras. 
              Sua parceira para o futuro digital.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon"><Github size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
            </div>
          </Col>
          
          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Serviços</h6>
            <ul className="list-unstyled text-muted">
              <li className="mb-2"><a href="#" className="footer-link">Web Development</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Apps Mobile</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Cloud</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Segurança</a></li>
            </ul>
          </Col>
          
          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Empresa</h6>
            <ul className="list-unstyled text-muted">
              <li className="mb-2"><a href="#" className="footer-link">Sobre</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Blog</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Carreiras</a></li>
              <li className="mb-2"><a href="#" className="footer-link">Contato</a></li>
            </ul>
          </Col>
          
          <Col md={4} lg={4}>
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-muted small">Receba novidades e atualizações</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="seu@email.com"
              />
              <button className="btn btn-primary">Inscrever</button>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        <div className="text-center text-muted">
          <small>
            © 2024 NexusHub - Desenvolvido por [Nome da Dupla]. Todos os direitos reservados.
          </small>
        </div>
      </Container>
    </footer>
  )
}

export default Footer