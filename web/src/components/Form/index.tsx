import React from "react";
import { Link } from "react-router-dom";

import { FormContainer, FormBox, FooterForm } from "./styles";

interface FormProps {
  title: string;
  subtitle?: string;
  pharagraph?: string;
  linktext?: string;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <FormContainer>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <FormBox>{props.children}</FormBox>
      <FooterForm>
        <p>{props.pharagraph}</p>
        <Link to="/register">{props.linktext}</Link>
      </FooterForm>
    </FormContainer>
  );
};

export default Form;
