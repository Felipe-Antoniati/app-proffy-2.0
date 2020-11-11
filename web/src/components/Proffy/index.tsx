import React from "react";

import logoImg from "../../images/logo.svg";

import { ProffyContainer, ProffyContent } from "./styles";

interface ProffyProps {
  title: string;
  alt: string;
}

const Proffy: React.FC<ProffyProps> = (props) => {
  return (
    <ProffyContainer>
      <ProffyContent>
        <img src={logoImg} alt={props.alt} />
        <h1>{props.title}</h1>
      </ProffyContent>
    </ProffyContainer>
  );
};

export default Proffy;
