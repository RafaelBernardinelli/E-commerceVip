import { Blob } from "buffer"
import moment from "moment"
import AddDTO from "../../data/dtos/AddDTO"

export function validateModel (modelo?: string): string {
    let validModel = ''
    if(modelo && modelo.length) {
        validModel = modelo.replace(/[^a-zA-Z0-9â ]+/, '')
        if(validModel.length > 99) validModel = validModel.substring(0, 99)
      }
      return validModel
}
export function validateBrand (marca?: string): string {
    let validMarca = ''
    if(marca && marca.length) {
        validMarca = marca.replace(/[^a-zA-Z0-9â ]+/, '')
        if(validMarca.length > 99) validMarca = validMarca.substring(0, 99)
       
      }
      return validMarca
}

export function validateImage(type?: string) {
    return type === 'image/png' ? true : false
}
export function validateImagem(imagem: string) {
    console.log(imagem)
    return imagem === undefined ? true : false

}


export function validateDTO(produto: AddDTO) {
    let fields: Array<string> = new Array<string>()
    if (produto.modelo.length < 3) fields.push(' Modelo')
    if (produto.marca.length < 3) fields.push(' Marca')
    if (produto.valor < 50) fields.push(' Valor')
    if (produto.cor.nome === "-" && produto.cor.id !== 17 && produto.cor.id !== 19 && produto.cor.id !== 21) fields.push(' Cor')
    if (produto.datacadastro !== moment(new Date()).format('YYYY-MM-DD') && produto.datacadastro < moment(new Date()).format('YYYY-MM-DD')) fields.push(' Data de cadastro')
    return fields
}