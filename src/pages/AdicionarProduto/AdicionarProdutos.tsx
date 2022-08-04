import { Link, useNavigate } from "react-router-dom";
import AddDTO from "../../data/dtos/AddDTO";
import { FormDataAPI } from "../../data/services/Service";
import { toast } from "react-toastify";
import React from "react";
import { Form } from "../../components/Form/Form";

const AdicionarProdutos = () => {
  const navigate = useNavigate();

  //criar os dados do formulario para enviar pro banco
  async function onSendForm(addDTO: AddDTO) {
    console.log(addDTO);
    try {
      await FormDataAPI.post(
        `${process.env.REACT_APP_BASE_URL}/produtos`,
        addDTO.convertToFormData()
      );
      toast.success("Produto adicionado com sucesso");
      navigate("/");
    } catch (error: any) {
      const fields: Array<string> = error.response?.data?.errors?.map(
        (error: { param: any }) => error.param
      );
      if (fields && fields.length)
        toast.error("Os seguintes campos possuem valores inválidos: " + fields);
      else toast.error("Falha ao adicionar o produto");
      console.log(error.response.data);
    }
  }
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
              to="./AdicionarProdutos"
              style={{ textDecoration: "none", color: "#0f4c81" }}
            >
              Adicionar Produto
            </Link>
          </nav>
          <h1>Adicionar Produto</h1>
        </div>
      </div>
      <Form formButton={"Adicionar produto"} formHandle={onSendForm} />
    </div>
  );
};
export default AdicionarProdutos;