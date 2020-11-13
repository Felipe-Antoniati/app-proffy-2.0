import styled from "styled-components";

import backgroundImg from "../../images/Ilustra.png";

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background: url(${backgroundImg}) no-repeat 40rem 6rem;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const LandingContent = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  
  img {
    margin-top: 10rem;
    width: 25rem;
    margin-left: 10rem;
  }

  p {
    margin-left: 10rem;
    max-width: 350px;
    color: ${(props) => props.theme.colors.bkglight};
    font-size: 2rem;
    opacity: 0.6;
    margin-top: 1rem;
  }
`;

export const LandingFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    span {

    }
  }
`;

export const Connections = styled.div`
  img {
    margin-left: 1rem;
  }
`;
