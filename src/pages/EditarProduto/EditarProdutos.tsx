import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import AddDTO from "../../data/dtos/AddDTO";
import { NodeAPI } from "../../data/services/Service";
import { AxiosResponse } from "axios";
import { Form } from "../../components/Form/Form";
import { toast } from "react-toastify";

const EditarProdutos = () => {
  const objectParam = useParams<{ id: string }>();
  const navigate = useNavigate();

  async function onSendForm(addDTO: AddDTO) {
    try {
      const id = addDTO.id;
      delete addDTO.id;
      await NodeAPI.put(
        `${process.env.REACT_APP_BASE_URL}/produtos/${id}`,
        addDTO
      );
      toast.success("Produto atualizado com sucesso");
      navigate("/");
    } catch (error: any) {
      const fields: Array<string> = error.response?.data?.errors?.map(
        (error: { param: any }) => error.param
      );
      if (fields && fields.length)
        toast.error("Os seguintes campos possuem valores inválidos: " + fields);
      else toast.error("Falha ao atualizar o produto");
      console.log(error.response.data);
    }
  }

  const getAddById = useCallback(async () => {
    if (objectParam.id === undefined) return;
    let response: AxiosResponse<AddDTO> | undefined = undefined;
    try {
      response = await NodeAPI.get(
        `${process.env.REACT_APP_BASE_URL}/produtos/${objectParam.id}`
      );
    } catch (error) {}
    return response?.data;
  }, [objectParam.id]);

  return (
    <div style={{ width: "1250px" }}>
      <div>
        <div style={{ marginTop: "30px" }}>
          <nav className="links">
            <Link to="../" style={{ textDecoration: "none", color: "#0f4c81" }}>
              {" "}
              Home &gt;{" "}
            </Link>
            <Link
              to="./EditarProdutos"
              style={{ textDecoration: "none", color: "#0f4c81" }}
            >
              Editar Produtos
            </Link>
          </nav>
          <h1>Editar Produtos</h1>
        </div>
      </div>
      <Form
        formButton={"Editar produto"}
        setInitialValues={getAddById}
        formHandle={onSendForm}
      />
    </div>
  );
};
export default EditarProdutos;
