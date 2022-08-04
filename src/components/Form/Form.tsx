import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddDTO from "../../data/dtos/AddDTO";
import { FormProps } from "../../data/props/FormProps";
import { ButtonAdd } from "../../pages/AdicionarProduto/components/ButtonAdd";
import { ImageLoader } from "../../pages/AdicionarProduto/components/ImageLoader";
import { FormTextField } from "./components/FormTextField";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import moment from "moment";
import '../../pages/style.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { currencyMask, toNumber, validateSchema } from "../../common/Functions";
import { ErrorMessage } from '@hookform/error-message';
import { validateBrand, validateModel } from "./FormValidation";

//funcao que seta os valores no formulario
export function Form(props: FormProps) {
  
  // const [errors, setErrors] = useState<any>({})
  const [id, setId] = useState<number>();
  const [modelo, setModelo] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [datacadastro, setDataCadastro] = useState<string>(moment(new Date()).format('YYYY-MM-DD'));
  const [imagem, setImage] = useState<any>();
  const [cor, setColor] = useState<{
    id: number;
    nome: string;
  }>({
    id: 0,
    nome: "",
  });
  const [valor, setValor] = useState<string>('');

  async function setValorParaEstados() {
    if (props.setInitialValues !== undefined) {
      const addDTO = await props.setInitialValues();
      if (addDTO !== undefined) {
        setId(addDTO.id);
        setModelo(addDTO.modelo);
        setMarca(addDTO.marca);
        setDataCadastro(addDTO.datacadastro);
        setImage(addDTO.imagem);
        setColor({
          id: addDTO.corid!,
          nome: "",
        });
        console.log(addDTO);
        setValor(String(addDTO.valor));
      }
    }
  }
  //inicia a pagina com os valores setados
  useEffect(() => {
    if (props.setInitialValues !== undefined) setValorParaEstados();
  }, []);

  useEffect(() => {
    setModelo(validateModel(modelo))
    setMarca(validateBrand(marca))
  }, [modelo, valor, marca]);

  function createAddDTO(): AddDTO {
    return new AddDTO(cor, datacadastro, imagem, Number(toNumber(valor)), modelo, marca, id);
  }
  return (
    <>
     {(props.setInitialValues !== undefined &&
     modelo !== undefined &&
     marca !== undefined &&
     valor !== undefined &&
     cor !== undefined &&
     datacadastro !== undefined &&
     imagem !== undefined) ||
     props.setInitialValues === undefined ? (
     <>
     <form onSubmit = {((e) => {
      e.preventDefault()
     props.formHandle(createAddDTO());
     })}> 
    <div className="modelo">
      <FormTextField
        autoComplete="off"
        label="Nome"
        name="modelo"
        value={modelo}
        placeholder="Digite o nome do produto"  
        autoFocus
        error={modelo === ""}
        onChange={(value) => setModelo(String(value))}
      />
      </div>
      <div>
      <FormTextField
        autoComplete="off"
        name="marca"
        label="Marca"
        value={marca}
        error={marca === ""}
        placeholder="Digite a marca do produto"
        onChange={(value) => setMarca(String(value))}
      />
       <FormControl fullWidth sx={{ width: '30%', marginBottom: '20px' }}>
          <InputLabel htmlFor="outlined-adornment-amount"> Valor</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={valor}
            onChange={(valor) => {
              setValor(currencyMask(valor.target.value))}}
            label="valor"
            placeholder="0,00"
            autoComplete="off"
            required
            error={valor === ""}
            startAdornment={<InputAdornment position="start"><p>R$</p></InputAdornment>}
          />
        </FormControl>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">Cor</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={cor?.id || "-"}
            label="Cor"
            required
            style={{ width: "260px", marginBottom: "20px" }}
            onChange={(event: any) => {
              setColor((prev) => ({ ...prev, id: event.target.value }));
            }}
          >
            <MenuItem value="-">Selecione uma cor</MenuItem>
            <MenuItem value={17}>Cinza</MenuItem>
            <MenuItem value={19}>Branco</MenuItem>
            <MenuItem value={21}>Preto</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="date">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
        onChange={(date) => {
          if(date !== null)
          setDataCadastro(moment(date).format('YYYY-MM-DD'))
        }}
          label="Data de cadastro"
          inputFormat="dd/MM/yyyy"
          value={moment(datacadastro, 'YYYY-MM-DD').toDate()}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      </div>
      <ImageLoader
        image={imagem}
        // {...register("imagem")}
        onChangeImage={(element: string) => setImage(element)}
      />
      {/* {errors.imagem && <span></span>} */}
      <ButtonAdd
      type={"submit"}
        label={props.formButton}
        onClick={() => {
        
        }}
      />
    </div>
    </form>
     </>
     ) : (
         <></>
       )}
     </>
  );
}
