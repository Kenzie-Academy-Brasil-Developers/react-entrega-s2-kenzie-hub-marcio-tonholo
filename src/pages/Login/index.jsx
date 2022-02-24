import logo from "../../assets/logo.svg";
import { Container, InputContanier } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import api from "../../services";

function Login() {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Senha deve ter no  mínimo 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <Container>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <InputContanier onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <Input
          register={register}
          label="Email"
          placeholder="Digite aqui seu email"
          name="email"
        />
        <Input
          register={register}
          label="Senha"
          placeholder="Digite aqui sua senha"
          name="password"
        />
        <Button children="Entrar" colorSchema="color-primary" type="submit" />
        <p>Ainda não possui uma conta?</p>
        <Button
          children="Cadastrar"
          colorSchema="grey-1"
          type="button"
          onClick={() => {
            history.push("/register");
          }}
        />
      </InputContanier>
    </Container>
  );
}

export default Login;
