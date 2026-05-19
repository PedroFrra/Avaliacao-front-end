import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Users 
} from 'lucide-react'

export const servicos = [
  {
    id: 1,
    titulo: 'Desenvolvimento Web',
    descricao: 'Criamos websites e aplicações web modernas e responsivas utilizando as tecnologias mais recentes do mercado.',
    icone: Globe,
    cor: '#4A90E2',
    categoria: 'Desenvolvimento'
  },
  {
    id: 2,
    titulo: 'Apps Mobile',
    descricao: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com foco em experiência do usuário.',
    icone: Smartphone,
    cor: '#50C878',
    categoria: 'Mobile'
  },
  {
    id: 3,
    titulo: 'Cloud Computing',
    descricao: 'Soluções em nuvem escaláveis para armazenamento, processamento e distribuição de dados.',
    icone: Cloud,
    cor: '#9B59B6',
    categoria: 'Infraestrutura'
  },
  {
    id: 4,
    titulo: 'Cibersegurança',
    descricao: 'Proteção completa contra ameaças digitais com monitoramento 24/7 e soluções avançadas.',
    icone: Shield,
    cor: '#E74C3C',
    categoria: 'Segurança'
  },
  {
    id: 5,
    titulo: 'Marketing Digital',
    descricao: 'Estratégias completas de marketing digital para aumentar sua presença online e conversões.',
    icone: TrendingUp,
    cor: '#F39C12',
    categoria: 'Marketing'
  },
  {
    id: 6,
    titulo: 'Consultoria Digital',
    descricao: 'Análise e consultoria especializada para transformação digital do seu negócio.',
    icone: Users,
    cor: '#1ABC9C',
    categoria: 'Consultoria'
  }
]

export const metricas = [
  { valor: '+500', label: 'Projetos Entregues' },
  { valor: '98%', label: 'Satisfação' },
  { valor: '+200', label: 'Clientes Ativos' },
  { valor: '24/7', label: 'Suporte' }
]