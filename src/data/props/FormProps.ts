import AddDTO from "../dtos/AddDTO"

export interface FormTextFieldProps {
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