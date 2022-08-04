import { ValidationError } from "yup"
import { OptionalObjectSchema } from "yup/lib/object"

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

