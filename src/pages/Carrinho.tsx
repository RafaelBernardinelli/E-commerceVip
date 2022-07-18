import React from "react"
import { Link } from "react-router-dom"
import { Button, ButtonGroup } from '@mui/material';
import { display, grid } from "styled-system";
import { Imagem } from "./item/componentes/Imagem";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';

const Carrinho = () => {
  return (
    <div className="font"
      style={{ backgroundColor: 'red', width: '1250px', gridTemplateColumns: '70%, 30%', marginTop: '30px' }}>
      <header>
        <nav className="links">
          <Link to="../"> Home &gt; </Link>
          <Link to="/Carrinho">Carrinho</Link>
        </nav>
      </header>

      <div className="gridColumn"
        style={{ backgroundColor: 'blue' }}>
        <div>
          <h1>Carrinho</h1>
        </div>
        <div className="Resumo">
          <h1>Resumo do Pedido</h1>
        </div>
        <div className="informacao">
        </div>
      </div>
      <div className="gridColumn">
        <div style={{
          backgroundColor: 'green',
          marginTop: '20px',
          borderRadius: '5px',
          display: 'flex',
          border: 'solid 1px #B2B2B2',
          height: '310px',
          width: '820px',
          justifyContent: 'space-evenly'

        }}>

          <div style={{ backgroundColor: 'purple', width: '180px', height: '180px' }}>

          </div>
          <div style={{ backgroundColor: 'yellow', width: '710px', height: '180px' }}>

            dddd
          </div>
          
          
        </div>
        <div className="pagar"
          style={{
            backgroundColor: '#d3d3d3',
            marginTop: '20px',
            height: '302px',
            borderRadius: '5px',
            padding: '10px 24px 0 24px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}>
          <p>Subtotal</p>
          <hr />
          <p>Frete</p>
          <hr />
          <p>Valor Total</p>
          <div style={{
            textAlign: 'center',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button
              style={{ width: '325px', marginTop: '10px', borderRadius: '5px', backgroundColor: '#0000ee'}}
              size='large'
              variant="contained"
            >Pagar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Carrinho