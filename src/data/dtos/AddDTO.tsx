//Transporte de dados para os componentes

export default class AddDTO {
  id?: number;
  cor: {
    id: number;
    nome: string;
  };
  datacadastro: string;
  imagem: string;
  valor: number;
  modelo: string;
  marca: string;
  corid?: number;

  constructor(
    cor: {
      id: number;
      nome: string;
    },
    datacadastro: string,
    imagem: string,
    valor: number,
    modelo: string,
    marca: string,
    id?: number
  ) 
  
  {
    this.cor = cor;
    this.datacadastro = datacadastro;
    this.imagem = imagem;
    this.valor = valor;
    this.modelo = modelo;
    this.marca = marca;
    if (id !== undefined) this.id = id;
  }
}
