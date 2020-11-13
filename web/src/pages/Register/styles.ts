import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.bkglight};

  a {
    margin-right: 30rem;
    img {
      width: 5rem;
    }
  }
`;

export const FormLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: 30rem;
  border-radius: 26px;
  margin-top: 2.6rem;

  h1 {
    margin-left: 2rem;
  }

  p {
    margin-left: 2rem;
    font-size: 1.4rem;
  }

  form {
    margin-left: 2rem;
  }

  button {
    margin-top: 1rem;
    padding: 15px 0;

    a {
      font-size: 1.6rem;
    }
  }
`;

export const FooterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
