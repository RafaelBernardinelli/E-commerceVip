import AddDTO from "../dtos/AddDTO"
export interface FormTextFieldProps {
    autoComplete: string
    autoFocus?: boolean
    placeholder: string
    name: string
    label: string
    value: string | number
    onChange: (variable: string | number) => void
    error?: boolean 
}
export interface TextFieldProps {
    placeholder: string
    label: string
    value: string | number
    onChange: (variable: string | number) => void
}
export interface FormProps {
    formButton: string
    formHandle: (addDTo:AddDTO) => void
    onDelete?: (addDTo:AddDTO) => void
    setInitialValues?: () => Promise<AddDTO | undefined>
}