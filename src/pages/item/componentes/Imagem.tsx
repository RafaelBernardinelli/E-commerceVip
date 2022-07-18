import React from "react"
import { imgProps } from "../ItemProps"

export function Imagem (props: imgProps){
    return (
        <div style={{ width: '130px', height: '180px'}}>
            <img src={require('../../../img/camera.png')} alt="" style={{marginTop: '35px',marginLeft: '', objectFit:'contain'}}/>
        </div>
        
    )
}