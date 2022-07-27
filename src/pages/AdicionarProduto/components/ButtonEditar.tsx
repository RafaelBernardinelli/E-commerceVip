import { Button } from "@mui/material";
import { ButtonEditarProps } from "../../../data/props/ButtonEditarProps";
import React from "react";

export function ButtonEditar (props: ButtonEditarProps) {
    return (
        <div
        style={{
          textAlign: 'center',
          borderRadius: '10px',
          display: 'flex',
        }}>
        <Button onClick={props.onClick} variant="contained"
          style={{ width: '287px', height: '50px', borderRadius: '5px', backgroundColor: '#0f4c81' }}>Editar Produto</Button>
      </div>
    )
}