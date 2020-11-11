import React from "react";

import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Proffy from "../../components/Proffy";

import { FooterForm, FormLogin, LoginPage } from "./styles";

const Login: React.FC = () => {
  return (
    <LoginPage>
      <Proffy title="Sua plataforma de estudos online" alt="Proffy" />
      <FormLogin>
        <Form
          title="Fazer login"
          pharagraph="Não tem conta?"
          linktext="Cadastre-se"
        >
          <Input idName="email" span="E-mail" inputType="email" required />
          <Input
            idName="password"
            span="Password"
            inputType="password"
            required
          />
          <FooterForm>
            <CheckBox title="Lembrar-me"/>
          </FooterForm>
          <Button title="Enter" routes="/map" />
        </Form>
      </FormLogin>
    </LoginPage>
  );
};

export default Login;
