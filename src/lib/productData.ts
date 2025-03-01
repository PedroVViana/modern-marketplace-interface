export interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  description?: string;
  date: string;
  category: string;
  isPromoted?: boolean;
  seller: {
    name: string;
    rating: number;
    memberSince: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Samsung Galaxy S23 Ultra - 512GB - Seminovo',
    price: 3999,
    location: 'São Paulo, SP',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=500',
    description: 'Vendo meu Samsung Galaxy S23 Ultra com 512GB de armazenamento. Em excelente estado, sem arranhões. Acompanha caixa original, carregador e fones não utilizados. Saúde da bateria em 95%. Motivo da venda: comprei outro modelo.',
    date: '2023-05-15',
    category: 'electronics',
    isPromoted: true,
    seller: {
      name: 'Carlos M.',
      rating: 4.8,
      memberSince: 'Maio 2020',
    },
  },
  {
    id: '2',
    title: 'Sofá Moderno - 3 Lugares - Cinza',
    price: 450,
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=500',
    description: 'Sofá confortável de 3 lugares na cor cinza. Usado por apenas 1 ano, em excelente estado. Capas removíveis e laváveis. Dimensões: 220cm largura x 85cm profundidade x 90cm altura.',
    date: '2023-05-10',
    category: 'furniture',
    seller: {
      name: 'Ana L.',
      rating: 4.9,
      memberSince: 'Janeiro 2019',
    },
  },
  {
    id: '3',
    title: 'Toyota Corolla 2021 - 45.000km - Completo',
    price: 105800,
    location: 'Belo Horizonte, MG',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500',
    description: 'Toyota Corolla 2021 com apenas 45.000km. Único dono, todas as revisões feitas na concessionária. Estado impecável, sem acidentes. Pacote completo incluindo teto solar e bancos de couro.',
    date: '2023-05-08',
    category: 'vehicles',
    isPromoted: true,
    seller: {
      name: 'Roberto S.',
      rating: 4.7,
      memberSince: 'Março 2018',
    },
  },
  {
    id: '4',
    title: 'PlayStation 5 - Versão com Disco - 2 Controles',
    price: 599,
    location: 'Brasília, DF',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=500',
    description: 'PlayStation 5 versão com disco em excelente estado. Acompanha 2 controles e 3 jogos (FIFA 23, God of War, Spider-Man). Todas as embalagens originais incluídas.',
    date: '2023-05-05',
    category: 'electronics',
    seller: {
      name: 'Pedro H.',
      rating: 4.6,
      memberSince: 'Outubro 2021',
    },
  },
  {
    id: '5',
    title: 'Apartamento para Alugar - 2 Quartos - Centro',
    price: 1200,
    location: 'Curitiba, PR',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500',
    description: 'Apartamento moderno de 2 quartos disponível para aluguel no centro da cidade. 75m², totalmente renovado, com cozinha planejada, ar condicionado em todos os cômodos. Ótima localização, próximo a lojas, restaurantes e transporte público.',
    date: '2023-05-03',
    category: 'property',
    isPromoted: true,
    seller: {
      name: 'Imobiliária Central',
      rating: 4.9,
      memberSince: 'Junho 2015',
    },
  },
  {
    id: '6',
    title: 'Mountain Bike - Trek Marlin 7',
    price: 680,
    location: 'Porto Alegre, RS',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=500',
    description: 'Trek Marlin 7 mountain bike, modelo 2022. Tamanho médio, rodas aro 29". Usada apenas algumas vezes, em excelente estado. Freios a disco hidráulicos, suspensão com trava. Vendendo devido a lesão.',
    date: '2023-05-01',
    category: 'hobbies',
    seller: {
      name: 'Marcelo D.',
      rating: 4.5,
      memberSince: 'Dezembro 2020',
    },
  },
  {
    id: '7',
    title: 'MacBook Pro 16" 2021 - M1 Pro - 16GB RAM - 512GB',
    price: 1800,
    location: 'Florianópolis, SC',
    image: 'https://images.unsplash.com/photo-1598495037740-2c360cf49e50?q=80&w=500',
    description: 'MacBook Pro 16" de 2021 com chip M1 Pro, 16GB RAM e 512GB SSD. Em perfeito estado, contagem de ciclos da bateria abaixo de 100. Acompanha carregador original e caixa.',
    date: '2023-04-28',
    category: 'electronics',
    seller: {
      name: 'Julia F.',
      rating: 5.0,
      memberSince: 'Agosto 2019',
    },
  },
  {
    id: '8',
    title: 'Vaga de Designer Gráfico - Trabalho Remoto',
    price: 3500,
    location: 'Remoto',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=500',
    description: 'Procuramos um Designer Gráfico experiente para se juntar à nossa equipe em crescimento. Posição remota, horários flexíveis. Requisitos: 3+ anos de experiência, proficiência no Adobe Creative Suite, portfólio sólido.',
    date: '2023-04-25',
    category: 'jobs',
    isPromoted: true,
    seller: {
      name: 'Creative Agency Inc.',
      rating: 4.7,
      memberSince: 'Fevereiro 2017',
    },
  },
  {
    id: '9',
    title: 'Mesa de Jantar com 6 Cadeiras - Madeira Maciça',
    price: 1250,
    location: 'Recife, PE',
    image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=500',
    description: 'Mesa de jantar em madeira maciça com 6 cadeiras. Estilo rústico moderno, acabamento em verniz natural. Dimensões: 180cm x 90cm. Produto em ótimo estado, com apenas 1 ano de uso.',
    date: '2023-04-22',
    category: 'furniture',
    isPromoted: false,
    seller: {
      name: 'Fernanda M.',
      rating: 4.6,
      memberSince: 'Abril 2019',
    },
  },
  {
    id: '10',
    title: 'Câmera Sony Alpha A7 III - Kit Completo',
    price: 8500,
    location: 'Salvador, BA',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500',
    description: 'Câmera Sony Alpha A7 III em perfeito estado. Acompanha lente Sony 24-70mm f/2.8, 2 baterias extras, carregador, bolsa de transporte, tripé e cartão de memória 128GB. Menos de 10.000 cliques.',
    date: '2023-04-20',
    category: 'electronics',
    isPromoted: true,
    seller: {
      name: 'Ricardo P.',
      rating: 4.9,
      memberSince: 'Setembro 2018',
    },
  },
  {
    id: '11',
    title: 'Notebook Dell XPS 15 - i7 - 32GB RAM - 1TB SSD',
    price: 9800,
    location: 'Goiânia, GO',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=500',
    description: 'Dell XPS 15 de última geração. Processador Intel i7 de 12ª geração, 32GB de RAM, SSD de 1TB, tela 4K touch de 15.6". Usado por apenas 3 meses, na garantia até 2025. Acompanha todos os acessórios originais.',
    date: '2023-04-18',
    category: 'electronics',
    isPromoted: false,
    seller: {
      name: 'Thiago B.',
      rating: 4.8,
      memberSince: 'Julho 2020',
    },
  },
  {
    id: '12',
    title: 'Bicicleta Elétrica Caloi E-Vibe - Pouco Uso',
    price: 3700,
    location: 'Manaus, AM',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=500',
    description: 'Bicicleta elétrica Caloi E-Vibe em ótimo estado. Bateria com autonomia de até 60km, motor de 350W, suspensão dianteira, freios a disco hidráulicos. Apenas 6 meses de uso, com nota fiscal e manual.',
    date: '2023-04-15',
    category: 'hobbies',
    isPromoted: true,
    seller: {
      name: 'Lucas V.',
      rating: 4.7,
      memberSince: 'Janeiro 2021',
    },
  },
];
