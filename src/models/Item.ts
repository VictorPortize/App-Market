interface Image {
  uri?: string;
  name?: string;
  type?: string;
}

export interface Item {
  id: number;
  tipo: 'KG' | 'UN';
  nome: string;
  foto?: Image;
  preco: string;
  quantidade?: number;
}
