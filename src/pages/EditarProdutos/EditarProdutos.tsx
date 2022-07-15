import { Link } from "react-router-dom"
import React from "react"
import { TextField } from "@mui/material"

const EditarProdutos = () => {
  return (
    <div>
      <div>
        <header>
          <nav className="links">
            <Link to="../Home"> Home &gt; </Link>
            <Link to="./EditarProduto">Editar Produto</Link>
          </nav>
        </header>
      </div>
      <div className="titulos">
        <h1>Editar Produto</h1>
      </div>
      <TextField
  id="outlined-name"
  label="Name"
  value={name}
  
/>
<TextField
  id="outlined-uncontrolled"
  label="Uncontrolled"
  defaultValue="foo"
/>
    </div>
  )
}

export default EditarProdutos