import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AddDTO from "../../data/dtos/AddDTO";
import { FormProps } from "../../data/props/FormProps";
import { ButtonAdd } from "../../pages/AdicionarProduto/components/ButtonAdd";
import { ImageLoader } from "../../pages/AdicionarProduto/components/ImageLoader";
import { FormTextField } from "./components/FormTextField";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import moment from "moment";

//funcao que seta os valores no formulario
export function Form(props: FormProps) {
  const [id, setId] = useState<number>();
  const [modelo, setModelo] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [datacadastro, setDataCadastro] = useState<string>("");
  const [imagem, setImage] = useState<any>();
  const [cor, setColor] = useState<{
    id: number;
    nome: string;
  }>({
    id: 0,
    nome: "",
  });
  const [valor, setValor] = useState<number>(0.0);

  //funcao que que traz os valores para o
  //formulario no momento de edita-lo
  async function setValorParaEstados() {
    if (props.setInitialValues !== undefined) {
      const addDTO = await props.setInitialValues();
      if (addDTO !== undefined) {
        setId(addDTO.id);
        setModelo(addDTO.modelo);
        setMarca(addDTO.marca);
        setDataCadastro(addDTO.datacadastro);
        setImage(`http://192.168.15.26:8080/${addDTO.imagem}`);
        setColor({
          id: addDTO.corid!,
          nome: "",
        });
        console.log(addDTO);
        setValor(addDTO.valor);
      }
    }
  }
  //inicia a pagina com os valores setados
  useEffect(() => {
    if (props.setInitialValues !== undefined) setValorParaEstados();
  }, []);

  function createAddDTO(): AddDTO {
    return new AddDTO(cor, datacadastro, imagem, valor, modelo, marca, id);
  }
  return (
    // <>
    //  {(props.setInitialValues !== undefined &&
    //  modelo !== undefined &&
    //  marca !== undefined &&
    //  valor !== undefined &&
    //  corid !== undefined &&
    //  dataCadastro !== undefined &&
    //  imagem !== undefined) ||
    //  props.setInitialValues === undefined ? (
    //  <>
    <div>
      <FormTextField
        label="Nome"
        value={modelo}
        placeholder="Digite o nome do produto"
        onChange={(value) => setModelo(String(value))}
      />
      <FormTextField
        label="Marca"
        value={marca}
        placeholder="Digite a marca do produto"
        onChange={(value) => setMarca(String(value))}
      />
      <FormTextField
        label="Valor R$"
        value={valor}
        placeholder="R$"
        onChange={(value) => setValor(Number(value))}
      />

      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">Cor</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={cor?.id}
            label="Cor"
            style={{ width: "260px", marginBottom: "20px" }}
            onChange={(event: any) => {
              setColor((prev) => ({ ...prev, id: event.target.value }));
            }}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
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
        onChangeImage={(element: string) => setImage(element)}
      />
      <ButtonAdd
        label={props.formButton}
        onClick={() => {
          props.formHandle(createAddDTO());
        }}
      />
    </div>
    // </>
    // ) : (
    //     <></>
    //   )}
    // </>
  );
}
