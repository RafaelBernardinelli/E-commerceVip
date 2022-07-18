import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { Button, FormControl, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import AddDTO from "../data/dtos/AddDTO";


const AdicionarProdutos = () => {
  const [name, setName] = useState<string>("")
  const [marca, setMarca] = useState<string>("")

  function onCLickEvent() {
    if (process.env.REACT_APP_IS_DEVELOPMENT) {
      console.log('cannot define add in development enviroment')
    } else {
      const addDTO = new AddDTO(name, marca)
    }


  }
  return (
    <div style={{ width: '1250px' }}>
      <div>
        <div style={{ marginTop: '30px' }}>
          <nav className="links">
            <Link to="../"> Home &gt; </Link>
            <Link to="./AdicionarProdutos">Adicionar Produto</Link>
          </nav>
          <h1>Adicionar Produtos</h1>
        </div>
      </div>
      <div className="form">
        <div className="margin">
          <TextField
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
            style={{ width: '70%', marginBottom: '2%' }}
            placeholder="Digite o nome do produto"
            id="demo-helper-text-misaligned"
            label="Nome"
          />
        </div>
        <div>
          <TextField
            value={marca}
            onChange={(event) => {
              setMarca(event.target.value)
            }}
            style={{ width: '70%', marginBottom: '2%' }}
            placeholder="Digite a marca do produto"
            id="demo-helper-text-misaligned"
            label="Marca"
          />
        </div>
        <div className="inputValor">
          <TextField
            style={{ width: '25%', marginBottom: '2%' }}
            placeholder="0"
            id="outlined-start-adornment-misaligned"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
          />
        </div>
        <div className="inputValor">
          <TextField
            style={{ width: '250px', marginBottom: '2%' }}
            id="outlined-select-currency"
            select
            label="Cor"
          >
          </TextField>
        </div>
        <div
          style={{
            textAlign: 'center',
            borderRadius: '10px',
            display: 'flex',
          }}>
          <Button onClick={onCLickEvent} variant="contained"
            style={{ width: '250px',height: '50px', borderRadius: '5px', backgroundColor: '#0000ee'  }}>Adicionar Produto</Button>
        </div>
      </div>
    </div>
  )
}

export default AdicionarProdutos;