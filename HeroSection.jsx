import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ArrowRight, Play } from 'lucide-react'
import './HeroSection.css'

const HeroSection = ({ 
  titulo = 'Transformação Digital para o Futuro', 
  subtitulo = 'Soluções inovadoras em tecnologia para impulsionar seu negócio ao próximo nível',
  textoBotao = 'Explorar Serviços'
}) => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6} className="mb-5 mb-lg-0">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
              🚀 Plataforma Digital
            </span>
            <h1 className="display-4 fw-bold mb-4 hero-title">
              {titulo}
            </h1>
            <p className="lead text-muted mb-4">
              {subtitulo}
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button variant="primary" size="lg" className="btn-custom-primary d-flex align-items-center gap-2">
                {textoBotao}
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline-primary" size="lg" className="d-flex align-items-center gap-2">
                <Play size={20} />
                Ver Demo
              </Button>
            </div>
            
            <div className="d-flex gap-4 mt-4 hero-stats">
              <div>
                <h3 className="fw-bold text-primary">+500</h3>
                <small className="text-muted">Projetos</small>
              </div>
              <div className="vr"></div>
              <div>
                <h3 className="fw-bold text-primary">98%</h3>
                <small className="text-muted">Sucesso</small>
              </div>
              <div className="vr"></div>
              <div>
                <h3 className="fw-bold text-primary">+200</h3>
                <small className="text-muted">Clientes</small>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="hero-image-container">
              <div className="hero-image-placeholder rounded-4 shadow-lg">
                <div className="p-5 text-center">
                  <div className="display-1 mb-3">💻</div>
                  <h4>Interface do Dashboard</h4>
                  <p className="text-muted">Imagem ilustrativa da plataforma</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,48C672,32,768,32,864,42.7C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection