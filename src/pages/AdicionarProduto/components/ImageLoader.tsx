
import { Button } from "@mui/material"
import React, { useEffect, useRef, useState } from "react"
import placeholderImage from './../../../img/placeholder.png'
import DownloadIcon from '@mui/icons-material/Download';
import { ImageLoaderProps } from "../../../data/props/ImageLoaderProps";



export function ImageLoader(props: ImageLoaderProps) {
    const fileAnchor: any = useRef()
    const [image, setImage] =  useState()
    const [renderedImage, setRenderedImage] = useState<any>(props.image)

    useEffect(() => {
        if(image){
            const objectURL = URL.createObjectURL(image)
            setRenderedImage(objectURL)
        }
    }, [image])

    function openFileExplorer(){
        fileAnchor.current.click()
    }
    function onSelectFile(event:any){
        setImage(event.target.files[0])
        props.onChangeImage(event.target.files[0].name)
    }

    return (
        <div style={{ display:'flex', marginBottom: '30px', alignItems: 'center'}}>
            <div style={{width: '130px',height: '130px'}}>
            <img src={renderedImage === undefined ? placeholderImage: renderedImage} alt="" style={{width: '100%', height: '100%', objectFit:'contain', border: '1px dashed grey', borderRadius: '5px'}}></img>
            </div>
            <input ref={fileAnchor} type='file' onChange={onSelectFile} style={{display:'none'}}/>
            <div style={{justifyContent: 'center', marginLeft: '20px'}}>
            <Button variant="outlined" onClick={openFileExplorer} style={{color:'grey', border: '1px solid grey'}} startIcon={<DownloadIcon />}>
                Carregar
            </Button>
            </div>
        </div>
    )
}