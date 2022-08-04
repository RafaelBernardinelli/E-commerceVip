//Transporte de dados para os componentes
export default class AddDTO {
  id?: number;
  cor: {
    id: number;
    nome: string;
  };
  datacadastro: string;
  imagem!: string;
  valor: number;
  modelo: string;
  marca: string;
  corid?: number;

  convertToFormData() {
    
    const produtosData = new FormData()
    produtosData.append("marca", this.marca);     
    if(this.imagem) produtosData.append("imagem", this.imagem)
    produtosData.append("valor", this.valor.toString())
    produtosData.append("modelo", this.modelo)
    produtosData.append("datacadastro", this.datacadastro)
    produtosData.append("corid", this.cor.id.toString());
    console.log("deu ruim", this.valor)
    return produtosData;
  }
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
    console.log('imagem', imagem)
    if (imagem && (imagem as any).lastModified) this.imagem = imagem
    this.valor = valor;
    this.modelo = modelo;
    this.marca = marca;
    if (id !== undefined) this.id = id;
  }
}
