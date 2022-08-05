
import { Button } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import placeholderImage from './../../../img/placeholderr.png'
import { ImageLoaderProps } from "../../../data/props/ImageLoaderProps";
import { validateImage } from "../../../components/Form/FormValidation";
import { error } from "console";

//funcao que realiza o tratamento do campo de imagem
export function ImageLoader(props: ImageLoaderProps) {
    const fileAnchor: any = useRef()
    const [errorMessage, setErrorMessage] = useState<boolean>(false)
    const [image, setImage] =  useState()
    const [renderedImage, setRenderedImage] = useState<any>(props.image)

    useEffect(() => {
        if(image){
            if(validateImage((image as any).type as string)){
            const objectURL = URL.createObjectURL(image)
            setRenderedImage(objectURL)
            setErrorMessage (false)
            }else setErrorMessage (true)
        }
    }, [image])
    function openFileExplorer(){
        fileAnchor.current.click()
    }
    function onSelectFile(event:any){
        setImage(event.target.files[0])
        props.onChangeImage(event.target.files[0])
    }
    return (
        <div style={{ display:'flex', marginBottom: '30px', marginTop: '20px',alignItems: 'center'}}>
            <div style={{width: '130px',height: '130px'}}>
            <Button variant="outlined" onClick={openFileExplorer} style={{width: '130px',height: '130px', objectFit: 'contain', border: 'none'}}>
            <img src={renderedImage === undefined ? placeholderImage: renderedImage} alt="" style={{width: '100%', height: '100%', border: '1px dashed grey', borderRadius: '5px', position: 'absolute'}}></img>
            
            <input ref={fileAnchor} type='file' onChange={onSelectFile} style={{display:'none'}}/>
            </Button>
            </div>
            <div style={{display: 'flex', flexDirection: "column", position: 'absolute', marginTop: '150px'}}>
                {errorMessage === true ? <p style={{ color: 'red', lineHeight: '5px'}}>Formato Invalido!</p> : <></>}
            </div>
            
            
        </div>
    )
}