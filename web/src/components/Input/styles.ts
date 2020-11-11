import styled from "styled-components";

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0 50px;
  justify-content: center;
  flex-direction: column;
  &:focus-within::after {
    width: calc(100% - 20.2rem);
    height: 2.9rem;
    content: "";
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2;
  }
  label {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.title};
  }
  input {
    width: 100% !important;
    height: 4rem;
    padding: 0 12px;
    resize: none;
    font-size: 18px;
    font-weight: 300;
    outline: none;
    color: ${(props) => props.theme.colors.title};
    background: ${(props) => props.theme.colors.bkginputlight};
    border-color: #e6e6f0;
    border-style: solid;
    &:focus ~ span,
    :valid ~ span {
      font-size: 12px;
      font-weight: 500;
      left: 0.9rem;
      letter-spacing: 1px;
      transform: translateY(-20px);
      color: ${(props) => props.theme.colors.primary};
    }
  }
  input[type="submit"] {
    position: relative;
    cursor: pointer;
    border-radius: 26px;
    max-width: 150px;
    padding: 12px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.bkglight};
    &:hover {
      background: ${(props) => props.theme.colors.primary};
    }
  }
  span {
    position: absolute;
    left: 1rem;
    padding: 5px 0;
    resize: none;
    font-size: 18px;
    font-weight: 300;
    transition: 0.5s;
    pointer-events: none;
    color: ${(props) => props.theme.colors.textbase};
  }
`;
