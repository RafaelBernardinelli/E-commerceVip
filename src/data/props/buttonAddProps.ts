export interface ButtonAddProps {
    label: string
    onClick: () => void
    type?: "button" | "submit" | "reset" | undefined

}