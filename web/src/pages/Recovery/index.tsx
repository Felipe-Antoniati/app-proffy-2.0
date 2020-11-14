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
            title="Eita, esqueceu sua senha?"
            subtitle="Não esquenta, vamos dar um jeito nisso."
          >
            <Input idName="email" span="E-mail" inputType="email" required />
            <Button title="Enviar" routes="/map" />
          </Form>
        </FormLogin>
      </LoginContainer>
      <Proffy title="Sua plataforma de estudos online" alt="Proffy" />
    </LoginPage>
  );
};

export default Login;
