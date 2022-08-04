import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { ListaDeItens } from "../listaProdutos/ListaDeItens";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "1250px",
          display: "grid",
          gridTemplateColumns: "80% 20%",
        }}
      >
        <div style={{ marginTop: "20px"}}>
          <h1>Produtos</h1>
        </div>
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Button
            style={{ backgroundColor: "#0f4c81" }}
            size="large"
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => {
              window.location.replace("./AdicionarProdutos");
            }}
          >
            Adicionar Produto
          </Button>
        </div>
        <ListaDeItens />
      </div>
    </div>
  );
};
export default Home;
