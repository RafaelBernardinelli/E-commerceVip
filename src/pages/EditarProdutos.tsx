import { Link } from "react-router-dom"
import React from "react"
import { Button, FormControl, Input, InputAdornment, InputLabel, TextField } from "@mui/material"
import { STRING } from "sequelize/types"

const EditarProdutos = () => {
  return (
    <div style={{ width: '1250px'}}>
      <div>
        <div style={{marginTop: '30px'}}>
          <nav className="links">
            <Link to="../"> Home &gt; </Link>
            <Link to="./EditarProduto">Editar Produto</Link>
          </nav>
          <h1>Editar Produto</h1>
        </div>
      </div>
      <div className="form">
        <div>
          <TextField
            style={{width: '70%', marginBottom: '2%'}}
            placeholder="Digite o nome do produto"
            id="demo-helper-text-misaligned"
            label="Nome"
          />
        </div>
        <div>
          <TextField
            style={{width: '70%', marginBottom: '2%'}}
            placeholder="Digite a marca do produto"
            id="demo-helper-text-misaligned"
            label="Marca"
          />
        </div>
        <div className="inputValor">
          <TextField
            style={{width: '25%', marginBottom: '2%'}}
            label="Valor"
            placeholder="0"
            id="outlined-start-adornment-misaligned"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
          />
        </div>
        <div className="inputValor">
          <TextField
            style={{width: '250px', marginBottom: '2%'}}
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
          <Button variant="contained"
            style={{ width: '250px',height: '50px', borderRadius: '5px', backgroundColor: '#0000ee' }}>Editar Produto</Button>
        </div>
      </div>
    </div>
  )
}

export default EditarProdutos