import { FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import AddDTO from "../../data/dtos/AddDTO"
import { FormProps } from "../../data/props/FormProps"
import { ButtonAdd } from "../../pages/AdicionarProduto/components/ButtonAdd"
import { ImageLoader } from "../../pages/AdicionarProduto/components/ImageLoader"
import { FormTextField } from "./components/FormTextField"

export function Form(props: FormProps) {
    console.log("huhuhu")
    const [modelo, setModelo] = useState<string>("")
    const [marca, setMarca] = useState<string>("")
    const [dataCadastro, setDataCadastro] = useState<string>('')
    const [imagem, setImage] = useState<string>('')
    const [corid, setColor] = useState<number>(0)
    const [valor, setValor] = useState<number>(0.0)

    async function setValorParaEstados(){
        console.log("hudwdhuhu")
        if(props.setInitialValues !== undefined){
        const addDTO = await props.setInitialValues()
       
            if(addDTO !== undefined){
                console.log(addDTO)     
                setModelo(addDTO.modelo)
                setMarca(addDTO.marca)
                setDataCadastro(addDTO.dataCadastro)
                setImage(`http://localhost:8080/${addDTO.imagem}`)
                setColor(addDTO.corid)
                setValor(addDTO.valor)
            }
        }
    }

    useEffect(() => {
        if(props.setInitialValues !== undefined)
            setValorParaEstados()
    }, [])

    function createAddDTO(): AddDTO {
        return new AddDTO(corid, dataCadastro, imagem, valor, modelo, marca)
    }
    return (

        // <>
        //  {(props.setInitialValues !== undefined && 
        //  modelo !== undefined &&
        //  marca !== undefined &&
        //  valor !== undefined &&
        //  corid !== undefined &&
        //  dataCadastro !== undefined &&
        //  imagem !== undefined) || 
        //  props.setInitialValues === undefined ? (
        //  <>
       <div>
            <FormTextField label="Nome" value={modelo} placeholder="Digite o nome do produto" onChange={(value) => setModelo(String(value))} />
            <FormTextField label="Marca" value={marca} placeholder="Digite a marca do produto" onChange={(value) => setMarca(String(value))} />
            <FormTextField label="Valor R$" value={valor} placeholder="0" onChange={(value) => setValor(Number(value))} />

            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Cor</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" value={corid} label="Cor" style={{ width: '287px', marginBottom: '20px' }}
                        onChange={(event: any) => { setColor(event.target.value) }}
                    >
                        <MenuItem value="">
                            <em>Nenhum</em>
                        </MenuItem>
                        <MenuItem value={17}>Cinza</MenuItem>
                        <MenuItem value={19}>Branco</MenuItem>
                        <MenuItem value={21}>Preto</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="date">
                <TextField className="date"
                    style={{ marginBottom: '20px', width: '287px' }}
                    type={"date"}
                    onChange={(event) => setDataCadastro(event.target.value)}
                    label='Data'
                />
            </div>
            <ImageLoader image={imagem} onChangeImage={(element: string) => setImage(element)} />
            <ButtonAdd
            label={props.formButton}
             onClick={() => {
                props.formHandle(createAddDTO())
            }}
             />
        </div>
        // </>
        // ) : (
        //     <></>
        //   )}
        // </>
    )
}