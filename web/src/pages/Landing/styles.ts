import styled from "styled-components";

import backgroundImg from "../../images/Ilustra.png";

export const LandingContainer = styled.div`
  width: 100%;
  height: 100%;

  background: url(${backgroundImg}) no-repeat 42rem 5rem;
  background-size: 30rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const LandingContent = styled.section`
  width: 100vw;
  height: 100vh;
  max-height: 28rem;
  display: flex;
  align-items: center;

  a {
    margin-bottom: 20rem;
    margin-left: 35rem;
    img{
      width: 3rem;
    }
  }
`;

export const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 25rem;
    margin-top: 5rem;
    margin-left: 14rem;
  }

  p {
    margin-left: 14rem;
    max-width: 350px;
    color: ${(props) => props.theme.colors.bkglight};
    font-size: 2rem;
    opacity: 0.6;
    margin-top: 1rem;
  }
`;

export const LandingFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.bkglight};
  }
`;

export const FooterContent = styled.div`
  margin-top: 3rem;

  h3 {
  font-weight: 500;
  color: ${(props) => props.theme.colors.textbase};
  span {
    font-weight: bold;
  }
`;

export const Connections = styled.div`
  margin-top: 1rem;
  margin-right: 2rem;

  img {
    width: 1.2rem;
    margin-left: 0.4rem;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.9;
    color: ${(props) => props.theme.colors.textbase};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-left: 7rem;

  a {
    width: 15rem;
    height: 5.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 700 1.6rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${(props) => props.theme.colors.bkglight};

    transition: background-color 0.2s;

    img {
      width: 3rem;
      margin-right: 1.4rem;
    }

    &:first-child {
      margin-right: 1.6rem;
    }
  }

  a.study {
    background: ${(props) => props.theme.colors.primary};

    &:hover {
      background: ${(props) => props.theme.colors.title};
    }
  }

  a.give-classes {
    background: ${(props) => props.theme.colors.specialgreen};

    &:hover {
      background: ${(props) => props.theme.colors.specialgreen};
    }
  }
`;
