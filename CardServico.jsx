import React from 'react'
import { Card } from 'react-bootstrap'
import { ArrowUpRight } from 'lucide-react'
import './CardServico.css'

const CardServico = ({ servico }) => {
  if (!servico) return null
  
  const { titulo, descricao, icone: Icone, cor, categoria } = servico
  
  return (
    <Card className="card-servico h-100 border-0 shadow-sm">
      <Card.Body className="d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div 
            className="icon-wrapper rounded-3 d-flex align-items-center justify-content-center"
            style={{ 
              backgroundColor: `${cor}15`,
              width: '60px', 
              height: '60px' 
            }}
          >
            {Icone && <Icone size={28} color={cor} />}
          </div>
          <span className="badge bg-light text-dark">{categoria}</span>
        </div>
        
        <Card.Title className="fw-bold mb-3">{titulo}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {descricao}
        </Card.Text>
        
        <a 
          href="#" 
          className="btn btn-link text-decoration-none p-0 mt-3 d-flex align-items-center gap-1 card-link"
          style={{ color: cor }}
        >
          Saiba mais
          <ArrowUpRight size={18} />
        </a>
      </Card.Body>
    </Card>
  )
}

export default CardServico