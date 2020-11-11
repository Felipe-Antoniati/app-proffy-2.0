import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      title: string;
      textinput: string;
      textcomplement: string;
      textbase: string;
      specialgreen: string;
      bkginputlight: string;
      bkglight: string;
    };
  }
}