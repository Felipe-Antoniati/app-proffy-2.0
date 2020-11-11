import React from "react";
import { CheckBoxContainer } from "./styles";

interface CheckBoxProps {
  title: string;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  return (
    <CheckBoxContainer>
      <input type="checkbox" />
      <span></span>
      <p>{props.title}</p>
    </CheckBoxContainer>
  );
};

export default CheckBox;
