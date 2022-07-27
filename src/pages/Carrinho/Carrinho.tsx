import React from "react"
import { Link } from "react-router-dom"
import { Button } from '@mui/material';


const Carrinho = () => {
  return (
    <div className="font"
      style={{ backgroundColor: 'red', width: '1250px', gridTemplateColumns: '70%, 30%', marginTop: '30px' }}>
      <header>
        <nav className="links">
          <Link to="../" style={{ textDecoration: 'none', color: '#0f4c81' }}> Home &gt; </Link>
          <Link to="/Carrinho" style={{ textDecoration: 'none', color: '#0f4c81' }}>Carrinho</Link>
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
      </div>
      <div className="gridColumn">
        <div style={{
          backgroundColor: 'green',
          marginTop: '20px',
          borderRadius: '5px',
          display: 'flex',
          border: 'solid 1px #B2B2B2',
          height: '250px',
          width: '750px',
          flexDirection: "column",
          padding: "25px"

        }}>
          <div>
            <div style={{ height: "150px", backgroundColor: "yellow", width: "750px", display: "flex" }}>
              <div style={{ backgroundColor: "pink", width: '150px', height: '150px', display: 'flex' }}>
                <div>
                  <img src="http://localhost:8080/iM3.png" style={{objectFit: "cover"}}></img>
                </div>
              </div>
              <div style={{ backgroundColor: "gray", width: '600px', height: '150px', display: 'flex' }}>
                <div style={{ paddingLeft: "15px", alignItems: "center" }}>
                  <h3>Câmera interna inteligente Wi-Fi Full HD iM3</h3>
                  <h4>IntelBras</h4>
                  <h4>Cor: Branco</h4>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ fontWeight: "bold", fontSize: "22px", height: "70px", backgroundColor: "purple", width: "750px", display: "flex", marginTop: "25px", alignItems: "center" }}>
              <div style={{ backgroundColor: "blue", width: "150px", textAlign: "center" }}>Quantidade:</div>
              <div style={{ display: "flex", width: "495px" }}>
                <Button style={{}}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18.5V15.5H23V18.5H9Z" fill="#353535" />
                    <circle cx="16" cy="16.5" r="15.5" stroke="#353535" />
                  </svg>
                </Button>
                <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.488 27.564V29.5H20.056V27.564H22.264V20.172C22.1467 20.332 21.9387 20.524 21.64 20.748C21.3413 20.9613 21.0107 21.148 20.648 21.308C20.296 21.468 19.976 21.548 19.688 21.548V19.564C19.9653 19.564 20.2533 19.4893 20.552 19.34C20.8507 19.1907 21.128 19.02 21.384 18.828C21.64 18.6253 21.848 18.4493 22.008 18.3C22.1787 18.14 22.264 18.0493 22.264 18.028H24.456V27.564H26.488Z" fill="#353535" />
                  <rect x="0.5" y="100" width="45" height="45" rx="6.5" stroke="#353535" />
                </svg>
                <Button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 17.5V23.5H15V17.5H9V15.5H15V9.5H17V15.5H23V17.5H17Z" fill="#353535" />
                    <circle cx="16" cy="16" r="15.5" stroke="#353535" />
                  </svg>
                </Button>
              </div>
              <div style={{}}>R$ 300,00</div>
            </div>
          </div>

        </div>
        <div className="pagar"
          style={{
            backgroundColor: '#d3d3d3',
            marginTop: '20px',
            height: '290px',
            borderRadius: '5px',
            padding: '10px 24px 0 24px',
            fontSize: '22px',
            fontWeight: 'bold'
          }}>
          <div style={{ display: "flex", justifyContent: 'space-between', lineHeight: "2px" }}><p>Subtotal</p><p>R$300,00</p></div>
          <hr />
          <div style={{ display: "flex", justifyContent: 'space-between', lineHeight: "2px" }}><p>Frete  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z" fill="#FF6363" />
            <path d="M9.20898 6.66016V13H7.79102V6.66016H9.20898ZM7.69727 4.99609C7.69727 4.78125 7.76758 4.60352 7.9082 4.46289C8.05273 4.31836 8.25195 4.24609 8.50586 4.24609C8.75586 4.24609 8.95312 4.31836 9.09766 4.46289C9.24219 4.60352 9.31445 4.78125 9.31445 4.99609C9.31445 5.20703 9.24219 5.38281 9.09766 5.52344C8.95312 5.66406 8.75586 5.73438 8.50586 5.73438C8.25195 5.73438 8.05273 5.66406 7.9082 5.52344C7.76758 5.38281 7.69727 5.20703 7.69727 4.99609Z" fill="white" />
          </svg></p><p>R$30,00</p></div>
          <hr />
          <div style={{ display: "flex", justifyContent: 'space-between', lineHeight: "2px" }}><p>Valor Total</p><p>R$330,00</p></div>
          <div style={{
            textAlign: 'center',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button
              style={{ width: '325px', marginTop: '25px', borderRadius: '5px', backgroundColor: '#0f4c81' }}
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