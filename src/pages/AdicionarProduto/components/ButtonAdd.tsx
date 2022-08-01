import { Button } from "@mui/material";
import React from "react";
import { ButtonAddProps } from "../../../data/props/buttonAddProps";
export function ButtonAdd (props: ButtonAddProps) {
    return (
        <div
        style={{
          textAlign: 'center',
          borderRadius: '10px',
          display: 'flex',
        }}>
        <Button onClick={props.onClick} variant="contained"
          style={{ width: '260px', height: '50px', borderRadius: '5px', backgroundColor: '#0f4c81' }}>
            {props.label}
        </Button>
      </div>
    )
}
