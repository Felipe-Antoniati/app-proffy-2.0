import React from "react";

import proffyLogo from "../../images/logo.svg";
import heartIcon from "../../images/heart.svg";

import {
  LandingContainer,
  LandingContent,
  LandingFooter,
  Connections,
} from "./styles";

const LadingPage: React.FC = () => {
  return (
    <LandingContainer>
      <LandingContent>
        <img src={proffyLogo} alt="Proffy" />
        <p>Sua Plataforma de Estudos Online</p>
      </LandingContent>
      <LandingFooter>
        <h3>
          Seja bem-vindi,
          <br />
          <span>Oque deseja Fazer?</span>
        </h3>
        <Connections>
          <h4>
            Total de 285 Conexões
            <br />
            &emsp;&emsp;já realizadas
            <img src={heartIcon} alt="Proffy" />
          </h4>
        </Connections>
      </LandingFooter>
    </LandingContainer>
  );
};

export default LadingPage;
