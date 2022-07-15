import React from "react"
import { Link } from "react-router-dom"

const Carrinho = () => {
    return (
       <div>
         <div>
        <header>
          <nav className="links">
            <Link to="../Home"> Home &gt; </Link>
            <Link to="/EditarProduto">Editar Produto</Link>
          </nav>
        </header>
      </div>
      <div className="titulos">
        <h1>Editar Produto</h1>
      </div>
       </div>
    )
}
export default Carrinho