import { Link } from "react-router-dom"
import React from "react"
import { FormControl, Input, InputAdornment, InputLabel, TextField } from "@mui/material";

const AdicionarProdutos = () => {
  return (
    <div>
      <div>
        <header>
          <nav className="links">
            <Link to="../Home"> Home &gt; </Link>
            <Link to="./AdicionarProdutos">Adicionar Produto</Link>
          </nav>
        </header>
      </div>
      <div className="titulos">
        <h1>Adicionar Produtos</h1>
        <TextField label="Nome" 

        placeholder="Digite o nome do Produto "
        />
        <TextField label="Marca" focused 
        placeholder="Digite a Marca do Produto"/>
          <FormControl sx={{ m: 1 }} >
          <InputLabel htmlFor="standard-adornment-amount">Valor</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            placeholder="000,00"
          />
        </FormControl>
      </div>
    </div>
  )
}

export default AdicionarProdutos;