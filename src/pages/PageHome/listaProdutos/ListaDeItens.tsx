import React from "react"
import Item from "../item/Item"

const mockObject = [
    {
        id: 1,
        corid: 15,
        dataCadastro: '2022/12/20',
        imagem: 'http://localhost:8080/iM3.png',
        valor: 1500.00,
        modelo: 'im3',
        marca: 'intelbras',
    },
    {
        id: 2,
        corid: 15,
        dataCadastro: '2022/12/20',
        imagem: 'http://localhost:8080/iM3.png',
        valor: 1500.00,
        modelo: 'im3',
        marca: 'intelbras',
    },
    {
        id: 3,
        corid: 15,
        dataCadastro: '2022/12/20',
        imagem: 'http://localhost:8080/iM3.png',
        valor: 1500.00,
        modelo: 'im3',
        marca: 'intelbras',
    },
]

export function ListaDeItens(){
    return (
    <div style={{height: '600px',width: '1280px', overflowY: 'scroll' }}>
            {mockObject.map((element, index) => {
                return <Item key={index} id={element.id}
                corid={element.corid} 
                imagem={element.imagem}
                valor={element.valor} 
                modelo={element.modelo}
                marca={element.marca} 
                
                 
                />
            })}
            
        </div>
    )
}