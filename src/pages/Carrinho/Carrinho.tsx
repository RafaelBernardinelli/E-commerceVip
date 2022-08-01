import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import "./Carrinho.modules.css";
import { NodeAPI } from "../../data/services/Service";

export function Carrinho() {
  const [cont, setCont] = useState<number>(1);
  const [itens, setItens] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [valor, setValor] = useState<number>(0);
  const [imagem, setImagem] = useState<string>("");
  const [cor, setCor] = useState<{
    id: number;
    nome: string;
  }>
  ({
    id: 0,
    nome: "",
  });
  const [marca, setMarca] = useState<string>("");
  const [openPagar, setOpenPagar] = useState<object>({});
  const [cedulas, setCedulas] = useState<boolean>(false);
  const { id } = useParams();
  const [btncor, setBtnColor] = useState<boolean>(false)

  async function getCarrinhoById() {
    try {
      const resposta = await NodeAPI.get(
        `${process.env.REACT_APP_BASE_URL}/produtos/${id}`
      );
      setModelo(resposta.data.modelo);
      setValor(resposta.data.valor);
      setImagem(resposta.data.imagem);
      setMarca(resposta.data.marca);

      await NodeAPI.get(
        `${process.env.REACT_APP_BASE_URL}/cor/${resposta.data.corid}`
      ).then((resposta) => {
        setCor(resposta.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCarrinhoById();
  }, []);
  useEffect(() => {
    console.log(cor);
  }, [cor]);

  let subtotal = 0;
  function soma() {
    return subtotal = valor * cont;
  }
  function total() {
    //total é subtotal mais frete
    return (soma() * 10) / 100 + soma();
  }
  function frete() {
    return total() - soma();
  }
  let valorItem = "";
  function item(cont: number) {
    if (cont !== 1) {
      return `${cont} itens`;
    } else {
      return `${cont} item`;
    }
  }
  function pagamento(total: number) {
    console.log(total);
    setCedulas(true);
    const counterCedulas = {
      200: 0,
      100: 0,
      50: 0,
      20: 0,
      10: 0,
      5: 0,
      2: 0,
    };
    var resto = total;
    for (var c = Object.keys(counterCedulas).length - 1; c >= 0; c--) {
      const currentCedula = Number(Object.keys(counterCedulas)[c]);
      const div = Math.floor(resto / currentCedula);
      // counterCedulas[currentCedula] += div;
      resto -= div * currentCedula;
    }
    setOpenPagar(counterCedulas);
    return resto;
  }

  return (
    <div
      className="font"
      style={{ backgroundColor: "", width: "1250px", marginTop: "30px" }}
    >
      <header>
        <nav className="links">
          <Link to="../" style={{ textDecoration: "none", color: "#0f4c81" }}>
            {" "}
            Home &gt;{" "}
          </Link>
          <Link
            to="/Carrinho"
            style={{ textDecoration: "none", color: "#0f4c81" }}
          >
            Carrinho
          </Link>
        </nav>
      </header>

      <div className="gridColumn" style={{ backgroundColor: "" }}>
        <div>
          <h1>Carrinho</h1>
        </div>
        <div className="Resumo">
          <h1>Resumo do Pedido</h1>
        </div>
      </div>
      <div className="gridColumn">
        <div className="grid1">
          <div>
            <div className="grid2">
              <div className="grid3"
              >
                <div>
                  <img src={imagem} style={{ objectFit: "cover" }}></img>
                </div>
              </div>
              <div className="grid4">
                <div style={{ paddingLeft: "15px", alignItems: "center" }}>
                  <h3>{modelo}</h3>
                  <p>{marca}</p>
                  <p>Cor: {cor.nome}</p>
              </div>
              </div>
            </div>
            <hr />
            <div className="btnQtd"
            >
              <div
                style={{
                  backgroundColor: "",
                  width: "150px",
                  textAlign: "center",
                }}
              >
                Quantidade:
              </div>
              <div style={{ display: "flex", width: "480px" }}>
                <Button
                  onClick={() => {
                    if (cont > 1) setCont(cont - 1);
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18.5V15.5H23V18.5H9Z" fill="#353535" />
                    <circle cx="16" cy="16.5" r="15.5" stroke="#353535" />
                  </svg>
                </Button>
                <p className="contador">{cont}</p>
                <Button
                  onClick={() => {
                    setCont(cont + 1);
                    console.log(setCont);
                  }}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 17.5V23.5H15V17.5H9V15.5H15V9.5H17V15.5H23V17.5H17Z"
                      fill="#353535"
                    />
                    <circle cx="16" cy="16" r="15.5" stroke="#353535" />
                  </svg>
                </Button>
              </div>
              <p>R$ {soma()},00</p>
            </div>
          </div>
        </div>
        <div
          className="pagar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              lineHeight: "2px",
            }}
          >
            <p>Subtotal ({item(cont)})</p>
            <p>R$ {soma()},00 </p>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              lineHeight: "2px",
              marginBottom: "20px",
            }}
          >
            <div id="passar_mouse">
              Frete <span></span>
              <svg
                id="passar_mouse"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z"
                  fill="#FF6363"
                />
                <path
                  d="M9.20898 6.66016V13H7.79102V6.66016H9.20898ZM7.69727 4.99609C7.69727 4.78125 7.76758 4.60352 7.9082 4.46289C8.05273 4.31836 8.25195 4.24609 8.50586 4.24609C8.75586 4.24609 8.95312 4.31836 9.09766 4.46289C9.24219 4.60352 9.31445 4.78125 9.31445 4.99609C9.31445 5.20703 9.24219 5.38281 9.09766 5.52344C8.95312 5.66406 8.75586 5.73438 8.50586 5.73438C8.25195 5.73438 8.05273 5.66406 7.9082 5.52344C7.76758 5.38281 7.69727 5.20703 7.69727 4.99609Z"
                  fill="white"
                />
              </svg>
              <div id="mostrar">Valor do frete: 10% do valor do produto</div>
            </div>
            <p>R$ {frete()},00</p>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              lineHeight: "2px",
            }}
          >
            <p>Valor Total</p>
            <p>R$ {total()},00</p>
          </div>
          <div
            style={{
              textAlign: "center",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button className=""
             onClick={() =>{
              setBtnColor(!btncor)
              pagamento(total())  
            }}
              style={{
                width: "325px",
                marginTop: "25px",
                borderRadius: "5px",
                backgroundColor: btncor ? "#ccc" : "#0f4c81",
              }}
              size="large"
              variant="contained"
            >
              Pagar
            </Button>
          </div>
        </div>
        <div></div>
        {cedulas && (
        <div className="pagamento"
        >
          <p>Pagamento realizado com sucesso!</p>
          <h2>
            {Object.entries(openPagar).map((it) => {
              if (it[1] > 0) return <p>{`Este pagamento foi realizado com ${it[1]} cédulas de R$${it[0]}`}</p>;
            })}
          </h2>
        </div>
         )}
      </div>
    </div>
  );
}
export default Carrinho;
