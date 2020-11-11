import React from "react";
import { Link } from "react-router-dom";

import { ButtonContainer, ButtonContent } from "./styles";

interface ButtonProps {
  title: string;
  routes: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonContainer>
      <ButtonContent>
        <Link to={props.routes}>{props.title}</Link>
      </ButtonContent>
    </ButtonContainer>
  );
};

export default Button;
