import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import AddDTO from "../../../data/dtos/AddDTO"
import { NodeAPI } from "../../../data/services/Service"
import Item from "../item/Item"

export function ListaDeItens () {
    const [produtos, setProdutos] = useState<Array<AddDTO>>()
async function getListProducts(){
    try{
        const response = await NodeAPI.get(`${process.env.REACT_APP_BASE_URL}/produtos`)
        setProdutos(response.data)
    }catch(error){
    }
}
useEffect(()=>{
    getListProducts()
}, [])
    return (
    <div style={{height: '630px',width: '1280px'}}>
            {produtos?.map((element, index) => {
                return <Item key={index} 
                id={Number(element.id)}
                cor={element.cor} 
                imagem={element.imagem}
                valor={element.valor} 
                modelo={element.modelo}
                marca={element.marca} 
                />
            })}  
        </div>
    )
}

