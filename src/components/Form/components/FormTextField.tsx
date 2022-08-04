import { TextField } from "@mui/material"
import { FormTextFieldProps } from "../../../data/props/FormProps"

export function FormTextField(props: FormTextFieldProps) {
    return (
        <div className="margin">
            <TextField
                autoFocus={props.autoFocus ?  true : undefined}
                value={props.value}
                name={props.name}
                onChange={(event) => {
                    props.onChange(event.target.value)
                }}
                style={{ width: '70%', marginBottom: '20px' }}
                placeholder={props.placeholder}
                id="outlined-basic"
                label={props.label}
                variant="outlined"
                required
            />
        </div>
    )
}

