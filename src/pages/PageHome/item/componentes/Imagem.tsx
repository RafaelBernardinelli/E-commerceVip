import React from "react";
import { imgProps } from "../../../../data/props/ItemProps";

export function Imagem(props: imgProps) {
  return (
    <div
      style={{
        width: "130px",
        height: "170px",
        alignItems: "center",
        display: "flex",
      }}
    >
      <img src={props.imagem} alt="Imagem do Produto" style={{ objectFit: "contain" }} />
    </div>
  );
}
