import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import CardServico from './components/CardServico/CardServico'
import DestaqueSection from './components/DestaqueSection/DestaqueSection'
import Footer from './components/Footer/Footer'
import { servicos } from './data/servicosData'

function App() {
  return (
    <div className="App">
      <Header logo="NexusHub" />
      
      <HeroSection 
        titulo="Soluções Digitais que Transformam Negócios"
        subtitulo="Da estratégia à execução, oferecemos serviços completos para acelerar sua transformação digital"
      />
      
      {/* Seção de Serviços */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nossos Serviços</h2>
            <p className="text-muted lead">
              Oferecemos soluções completas para todas as suas necessidades digitais
            </p>
          </div>
          
          <Row>
            {servicos.map(servico => (
              <Col key={servico.id} md={6} lg={4} className="mb-4">
                <CardServico servico={servico} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      <DestaqueSection />
      
      <Footer />
    </div>
  )
}

export default App