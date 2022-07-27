import { TextField } from "@mui/material"
import { FormTextFieldProps } from "../../../data/props/FormProps"

export function FormTextField(props: FormTextFieldProps) {
    return (
        <div className="margin">
            <TextField
                value={props.value}
                onChange={(event) => {
                    props.onChange(event.target.value)
                }}
                style={{ width: '70%', marginBottom: '20px' }}
                placeholder={props.placeholder}
                id="outlined-basic"
                label={props.label}
                variant="outlined"
            />
        </div>
    )
}
