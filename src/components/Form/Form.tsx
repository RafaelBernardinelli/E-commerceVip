import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
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
import { validateBrand, validateDTO, validateModel } from "./FormValidation";
import { currencyMask, toNumber} from "../../common/Functions";
import { toast } from "react-toastify";

export function Form(props: FormProps) {
  
  const [id, setId] = useState<number>();
  const [modelo, setModelo] = useState<string>("");
  const [modeloError, setModeloError] = useState<boolean>(false);
  const [marca, setMarca] = useState<string>("");
  const [marcaError, setMarcaError] = useState<boolean>(false);
  const [datacadastro, setDataCadastro] = useState<string>(moment(new Date()).format('YYYY-MM-DD'));
  const [datacadastroError, setDataCadastroError] = useState<boolean>(false);
  const [imagem, setImage] = useState<any>();
  const [cor, setColor] = useState<{
    id: number;
    nome: string;
  }>({
    id: 0,
    nome: "-",
  });
  const [corError, setCorError] = useState<boolean>(false);
  const [valor, setValor] = useState<string>("");
  const [valorError, setValorError] = useState<boolean>(false);

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
          nome: "-",
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
  setModeloError(false)
}, [modelo])
useEffect(() => {
  setMarcaError(false)
}, [marca])
useEffect(() => {
    setCorError(false)
}, [cor])
useEffect(() => {
  setValorError(false)
}, [valor])

  useEffect(() => {
    setModelo(validateModel(modelo))
    setMarca(validateBrand(marca))
  }, [modelo, valor, marca]);

  function createAddDTO(): AddDTO {
    if(modelo === "") setModeloError(true)
    if(marca === "") setMarcaError(true)
    if(valor === "") setValorError(true)
    if(cor && cor.nome === '-' && cor.id !== 17 && cor.id !== 19 && cor.id !== 21) setCorError(true)
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
 
    <div className="modelo">
      <FormTextField
        autoComplete="off"
        label="Modelo"
        name="modelo"
        value={modelo}
        placeholder="Digite o modelo do produto"  
        autoFocus
        error={modeloError}
        onChange={(value) => setModelo(String(value))}
      />
      </div>
      <div>
      <FormTextField
        autoComplete="off"
        name="marca"
        label="Marca"
        value={marca}
        error={marcaError}
        placeholder="Digite a marca do produto"
        onChange={(value) => setMarca(String(value))}
      />
       <FormControl fullWidth sx={{ width: '30%', marginBottom: '20px' }}>
          <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={valor}
            onChange={(valor) => {
              setValor(currencyMask(valor.target.value))}}
            label="valor"
            placeholder="0,00"
            autoComplete="off"
            required
            error={valorError}
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
            required={true}
            error={corError}
            style={{ width: "260px", marginBottom: "20px" }}
            onChange={(event: any) => {
              setColor((prev) => ({ ...prev, id: event.target.value }));
            }}
          >
            <MenuItem value="-"><em>Selecione uma cor</em></MenuItem>
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
          mask="__/__/____"
          value={moment(datacadastro, 'YYYY-MM-DD').toDate()}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
      </div>
      <ImageLoader
        image={imagem}
        onChangeImage={(element: string) => setImage(element)}
      />
      <ButtonAdd
      type={"submit"}
        label={props.formButton}
        onClick={() => {
          const addDTO = createAddDTO()
                const fields = validateDTO(addDTO)
                if (fields && fields.length) toast.error(`Os seguintes campos não foram preenchidos ou possuem valores invalidos: ${fields.map((value: any) => value)}`)
                else props.formHandle(addDTO)
        }}
      />
    </div>
     </>
     ) : (
         <></>
       )}
     </>
  );
}
