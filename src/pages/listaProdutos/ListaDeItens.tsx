import React from "react"
import Item from "../item/Item"

const mockObject = [
    {
        id: 1,
        name: 'CameraAZ',
        marca: 'intel',
        color: 'branco',
        valor: 1500,
        image: 'C:\Users\Administrador\projeto_em_typescript\src\img\camera.png'
    },
    {
        id: 2,
        name: 'CameraCD',
        marca: 'intelz',
        color: 'cinza',
        valor: 1500,
        image: 'C:\Users\Administrador\projeto_em_typescript\src\img\camera.png'
    },
    {
        id: 3,
        name: 'CameraER',
        marca: 'intely',
        color: 'Preto',
        valor: 1500,
        image: 'C:\Users\Administrador\projeto_em_typescript\src\img\camera.png'
    },
]

export function ListaDeItens(){
    return (
        <div style={{height: '600px',width: '1280px', overflowY: 'scroll' }}>
            {mockObject.map((element) => {
                return <Item marca={element.marca} 
                color={element.color} 
                id={element.id} 
                valor={element.valor} 
                name={element.name} 
                image={element.image}/>
            })}
            
        </div>
    )
}