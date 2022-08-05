import { ValidationError } from "yup"
import { OptionalObjectSchema } from "yup/lib/object"
import AddDTO from "../data/dtos/AddDTO"

export function toCurrency(value: string | number) {
    const newValue = typeof value === "string" ? value : value.toFixed(2)
    return newValue.replaceAll(".", ",")
}
export async function validateSchema (schema: OptionalObjectSchema<any>, data: any) {
    try {
        await schema.validate(data, {
            abortEarly: true
        })
    } catch (error) {
        if (error) return error as ValidationError
        console.log(error)  
    }
}

  export function toNumber(value: string) {
    return value.replaceAll(".", "").replaceAll(",", ".")
}
    
export function replaceToCurrencyMask(value: string) {
    return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.')
}
    
    export function validateNumber(value: string, replaceMask: (value: string) => string) {
    if (value.length > 4 && value[0] === '0' && !isNaN(Number(value[1])))
    return replaceMask(value.slice(1))
    return replaceMask(value)
    }
    
    export function currencyMask(value: string) {
    const valueWithoutMask: string = replaceToCurrencyMask(value)
    let valueReplaced: string = validateNumber(valueWithoutMask, replaceToCurrencyMask)
    if (valueReplaced.length <= 19) return valueReplaced
    return value.slice(0, value.length - 1)
    }