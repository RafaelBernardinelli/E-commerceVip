import React from "react"
import { DataProps } from "../../../../data/props/ItemProps"

export function Data (props: DataProps){
    return (
        <div style={{
            
            width: '900px',
            height: '170px',
            display: 'block',

        }}>
            <p style={{fontSize: '24px', marginLeft: '20px', fontWeight: 'bold', lineHeight: "2px"}}>{props.modelo}</p>
            <p style={{fontSize: '20px', marginLeft: '20px'}}>{props.marca}</p>
            <p style={{fontSize: '32px', marginLeft: '20px', color: '#0f4c81', fontWeight: 'bold', lineHeight: "0px"}}>R$ {props.valor}</p>
            <p style={{fontSize: '20px', marginLeft: '20px', lineHeight: "5px"}}>Cor: {props.cor.nome}</p>
        </div>
    )
}