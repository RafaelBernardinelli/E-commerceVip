import React from "react";
import { Data } from "./componentes/Data";
import { Icons } from "./componentes/Icons";
import { Imagem } from "./componentes/Imagem";
import { ItemProps } from "./ItemProps";



export default function Item(props: ItemProps) {
    return <div style={{
            marginTop: "18px",
            height: '180px',
            display: 'flex',
            width: '1250px',
            justifyContent: 'space-evenly'
        }}>
            <Imagem image={props.image}/>
            <Data 
            marca={props.marca} 
            color={props.color} 
            valor={props.valor} 
            name={props.name} />
            <Icons />
        </div>
    
}