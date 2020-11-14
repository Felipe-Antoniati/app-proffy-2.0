import React from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Proffy from "../../components/Proffy";

import arrowLeft from "../../images/icons/arrow-left.svg";

import { FormLogin, LoginContainer, LoginPage } from "./styles";

const Login: React.FC = () => {
  return (
    <LoginPage>
      <LoginContainer>
        <Link to="/">
          <img src={arrowLeft} alt="Voltar" />
        </Link>
        <FormLogin>
          <Form
            title="Cadastro"
            subtitle="Preencha os dados abaixo para começar."
          >
            <Input idName="name" span="Nome" inputType="text" required />
            <Input
              idName="lastname"
              span="Sobrenome"
              inputType="text"
              required
            />
            <Input idName="email" span="E-mail" inputType="email" required />
            <Input
              idName="password"
              span="Password"
              inputType="password"
              required
            />
            <Button title="Concluir Cadastro" routes="/map" />
          </Form>
        </FormLogin>
      </LoginContainer>
      <Proffy title="Sua plataforma de estudos online" alt="Proffy" />
    </LoginPage>
  );
};

export default Login;
