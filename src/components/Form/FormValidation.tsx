export function validateModel (modelo: string): string {
    let validModel = ''
    if(modelo && modelo.length) {
        validModel = modelo.replace(/[^a-zA-Z0-9â ]+/, '')
        if(validModel.length > 99) validModel = validModel.substring(0, 99)
      }
      return validModel
}
export function validateBrand (marca: string): string {
    let validMarca = ''
    if(marca && marca.length) {
        validMarca = marca.replace(/[^a-zA-Z0-9â ]+/, '')
        if(validMarca.length > 99) validMarca = validMarca.substring(0, 99)
       
      }
      return validMarca
}

export function validateImage(type: string) {
    return type === 'image/png' ? true : false
}
