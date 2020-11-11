import styled from "styled-components";

export const FormContainer = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.title};
  }
  p {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.textbase};
  }
`;

export const FormBox = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.6rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const FooterForm = styled.div`
  margin-top: 2rem;

  p {
    font: 500 1.2rem;
    color: ${(props) => props.theme.colors.textbase};
  }
  a {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
  }
`;
