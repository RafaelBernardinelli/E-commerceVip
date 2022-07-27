import { Link, useNavigate } from "react-router-dom"
import AddDTO from "../../data/dtos/AddDTO";
import { NodeAPI } from "../../data/services/Service";
import { toast } from 'react-toastify';
import React from "react";
import { Form } from "../../components/Form/Form";


const AdicionarProdutos = () => {
  const navigate = useNavigate()
  
  
  async function onSendForm(addDTO: AddDTO) {
    console.log("testando imagem", typeof addDTO.imagem)

    try {
      let produtosData = new FormData() 
      produtosData.append("marca", addDTO.marca)
      produtosData.append("imagem", addDTO.imagem)
      produtosData.append("valor", addDTO.valor.toString())
      produtosData.append("modelo", addDTO.modelo)
      produtosData.append("datacadastro", addDTO.dataCadastro)
      await NodeAPI.post(`${process.env.REACT_APP_BASE_URL}/produtos`, produtosData)
      toast.success('Produto cadastrado com sucesso')
      navigate('/')
      
    } catch (error: any) {
      const fields: Array<string> = error.response?.data?.errors?.map((error: { param: any }) => error.param)
      if (fields.length) toast.error("Os seguintes campos possuem valores inválidos: " + fields)
      else toast.error("Falha ao cadastrar o produto")
      console.log(error.response.data)
    }
  }

  return (
    <div style={{ width: '1250px' }}>
      <div>
        <div style={{ marginTop: '30px' }}>
          <nav className="links">
            <Link to="../" style={{ textDecoration: 'none', color: '#0f4c81' }}> Home &gt; </Link>
            <Link to="./AdicionarProdutos" style={{ textDecoration: 'none', color: '#0f4c81' }}>Adicionar Produto</Link>
          </nav>
          <h1>Adicionar Produtos</h1>
        </div>
      </div>
      <Form formButton={'Adicionar produto'} formHandle={onSendForm}/>
    </div >
  )
}

export default AdicionarProdutos;