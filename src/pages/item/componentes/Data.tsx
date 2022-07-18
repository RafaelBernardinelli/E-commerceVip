import React from "react"
import { DataProps } from "../ItemProps"

export function Data (props: DataProps){
    return (
        <div style={{
            
            width: '900px',
            height: '180px',
            display: 'block',

        }}>
            <p style={{fontSize: '20px', marginLeft: '20px', fontWeight: 'bold'}}>{props.name}</p>
            <p style={{fontSize: '20px', marginLeft: '20px'}}>{props.marca}</p>
            <p style={{fontSize: '20px', marginLeft: '20px', color: 'blue', fontWeight: 'bold'}}>{props.valor}</p>
            <p style={{fontSize: '20px', marginLeft: '20px'}}>{props.color}</p>
        </div>
    )
}