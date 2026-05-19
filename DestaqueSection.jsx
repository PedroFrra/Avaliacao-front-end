import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Award, Clock, Heart, Shield } from 'lucide-react'
import './DestaqueSection.css'

const DestaqueSection = ({ metricas = [] }) => {
  const defaultMetricas = [
    { valor: '+500', label: 'Projetos Entregues' },
    { valor: '98%', label: 'Satisfação' },
    { valor: '+200', label: 'Clientes Ativos' },
    { valor: '24/7', label: 'Suporte' }
  ]

  const diferenciais = [
    {
      icone: Award,
      titulo: 'Qualidade Premium',
      descricao: 'Processos rigorosos de qualidade em cada entrega'
    },
    {
      icone: Clock,
      titulo: 'Entrega Ágil',
      descricao: 'Metodologias ágeis para resultados rápidos'
    },
    {
      icone: Heart,
      titulo: 'Foco no Cliente',
      descricao: 'Soluções personalizadas para cada necessidade'
    },
    {
      icone: Shield,
      titulo: 'Segurança Total',
      descricao: 'Proteção de dados e conformidade LGPD'
    }
  ]

  return (
    <section className="destaque-section py-5">
      <Container>
        {/* Métricas */}
        <Row className="mb-5">
          {(metricas.length ? metricas : defaultMetricas).map((metrica, index) => (
            <Col key={index} xs={6} md={3} className="text-center mb-3 mb-md-0">
              <div className="metrica-card p-4 rounded-3">
                <h2 className="fw-bold text-primary mb-2">{metrica.valor}</h2>
                <p className="text-muted mb-0">{metrica.label}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Diferenciais */}
        <h2 className="text-center fw-bold mb-5">Por que nos escolher?</h2>
        <Row>
          {diferenciais.map((diferencial, index) => {
            const Icone = diferencial.icone
            return (
              <Col key={index} md={6} lg={3} className="mb-4">
                <div className="diferencial-card text-center p-4 h-100 rounded-3 shadow-sm">
                  <Icone size={40} className="text-primary mb-3" />
                  <h5 className="fw-bold mb-2">{diferencial.titulo}</h5>
                  <p className="text-muted mb-0">{diferencial.descricao}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default DestaqueSection