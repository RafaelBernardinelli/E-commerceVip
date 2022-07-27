import { Link, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { Button, FormControl, Input, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddDTO from "../../data/dtos/AddDTO";
import { ImageLoader } from "../AdicionarProduto/components/ImageLoader";
import { ButtonAdd } from "../AdicionarProduto/components/ButtonAdd";
import { NodeAPI } from "../../data/services/Service";
import { AxiosResponse } from "axios";
import { Form } from "../../components/Form/Form";


const EditarProdutos = () => {
  // const [modelo, setModelo] = useState<string>("")
  // const [marca, setMarca] = useState<string>("")
  // const [dataCadastro, setDataCadastro] = useState<string>('')
  // const [image, setImage] = useState<string>('')
  // const [corid, setColor] = useState<number>(0)
  // const [valor, setValor] = useState<number>(0.0)
  const objectParam = useParams<{ id:string }>()
  // const [mockName, setMockName] = useState<string>()


  async function getAddById() :Promise<AddDTO| undefined>{
    let response: AxiosResponse<AddDTO> | undefined = undefined
     try {
    response = await NodeAPI.get(`${process.env.REACT_APP_BASE_URL}/produtos/${objectParam.id}`)
    
  } catch(error) {
    }
    return response?.data
  }

  useEffect(() => {
    getAddById()
  }, [])

  return (
    <div style={{ width: '1250px' }}>
      <div>
        <div style={{ marginTop: '30px' }}>
          <nav className="links">
            <Link to="../" style={{textDecoration: 'none', color: '#0f4c81'}}> Home &gt; </Link>
            <Link to="./EditarProdutos" style={{textDecoration: 'none', color: '#0f4c81'}}>Editar Produtos</Link>
          </nav>
          <h1>Editar Produtos</h1>
        </div>
      </div>
      <Form formButton={'Editar produto'}
      setInitialValues={getAddById} formHandle={() => {}}/>
    </div >
  )
  }
export default EditarProdutos