import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 3.6rem;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.specialgreen};
  transition: background-color 0.4s;
  &:hover {
    background: #51cc5d;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font: 600 1.6rem Archivo, Arial, sans-serif;
    text-decoration: none;
    color: ${(props) => props.theme.colors.bkglight};
  }
`;
