import styled from "styled-components";
import backgroundImg from "../../images/bkg-landing.png";

export const ProffyContainer = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  
  background: url(${backgroundImg}) no-repeat center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ProffyContent = styled.div`
  position: relative;
  display: flex;
  justi-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
  h1 {
    font-size: 2.4rem;
    max-width: 360px;
    font-weight: 500;
    opacity: 0.8;
    color: ${(props) => props.theme.colors.bkglight};
  }
  img {
    width: 25rem;
    margin-bottom: 2rem;
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 25rem;
  }
`;
