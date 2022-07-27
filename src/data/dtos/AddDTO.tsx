export default class AddDTO {

    id?: number
    corid: number
    dataCadastro: string
    imagem: string 
    valor: number
    modelo: string
    marca: string

    constructor(corid: number, dataCadastro: string, imagem: string, valor: number, modelo: string, marca: string, id?: number) {
        this.corid = corid
        this.dataCadastro = dataCadastro
        this.imagem = imagem
        this.valor = valor
        this.modelo = modelo
        this.marca = marca
        if(id !== undefined) this.id = id
    }
    }