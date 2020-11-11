import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.bkglight};
`;

export const FormLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  height: 30rem;
  border-radius: 26px;
  margin-right: 7rem;

  button {
    margin-top: 1rem;
  }
`;

export const FooterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
