import React from "react";
import { Data } from "./componentes/Data";
import { Icons } from "./componentes/Icons";
import { Imagem } from "./componentes/Imagem";
import { ItemProps } from "../../../data/props/ItemProps";

export default function Item(props: ItemProps) {
  console.log("ver props" + props);
  return (
    <div
      style={{
        marginTop: "20px",
        height: "190px",
        display: "flex",
        width: "1250px",
        justifyContent: "space-evenly",
      }}
    >
      <Imagem imagem={props.imagem} />
      <Data
        marca={props.marca}
        cor={props.cor}
        valor={props.valor}
        modelo={props.modelo}
      />
      <Icons id={props.id} />
    </div>
  );
}
