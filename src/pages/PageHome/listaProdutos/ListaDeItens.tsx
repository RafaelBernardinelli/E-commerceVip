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
        toast.success("Lista de Produtos atual")
    }catch(error){
        toast.error("Erro na busca de produtos")
    }
}
useEffect(()=>{
    getListProducts()
}, [])
    return (
    <div style={{height: '600px',width: '1280px', overflowY: 'scroll' }}>
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

