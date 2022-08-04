export interface ItemProps {
  id: number;
  modelo: string;
  marca: string;
  cor: {
    id: number;
    nome: string;
  };
  valor: number;
  imagem: string;
}
export interface DataProps {
  modelo: string;
  marca: string;
  cor: {
    id: number;
    nome: string;
  };
  valor: number;
}
export interface imgProps {
  imagem: string;
}
