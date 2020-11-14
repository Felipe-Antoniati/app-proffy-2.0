import React from "react";

import proffyLogo from "../../images/logo.svg";
import heartIcon from "../../images/icons/heart-purple.svg";
import studyIcon from "../../images/icons/study.svg";
import logoutIcon from "../../images/icons/logout.svg";
import giveClassesIcon from "../../images/icons/give-class.svg";

import {
  LandingContainer,
  LandingContent,
  LandingFooter,
  Connections,
  ButtonsContainer,
  FooterContent,
  Intro,
} from "./styles";
import { Link } from "react-router-dom";

const LadingPage: React.FC = () => {
  return (
    <LandingContainer>
      <LandingContent>
        <Intro>
          <img src={proffyLogo} alt="Proffy" />
          <p>Sua Plataforma de Estudos Online</p>
        </Intro>
        <Link to="/">
          <img src={logoutIcon} alt="Sair" />
        </Link>
      </LandingContent>
      <LandingFooter>
        <FooterContent>
          <h3>
            Seja bem-vindi,
            <br />
            <span>Oque deseja Fazer?</span>
          </h3>
        </FooterContent>
        <ButtonsContainer>
          <Connections>
            <h4>
              Total de 285 Conexões
              <br />
              &emsp;&emsp;já realizadas
              <img src={heartIcon} alt="Proffy" />
            </h4>
          </Connections>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </ButtonsContainer>
      </LandingFooter>
    </LandingContainer>
  );
};

export default LadingPage;
