import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#111216",
  boxShadow: "0px 9px 14px -6px rgba(0,0,0,0.25)"
};

export const darkTheme = {
  body: "#111216",
  fontColor: "#fff",
  boxShadow: "0px 9px 14px -6px rgba(0,0,0,0.8)"
};

export const lightShadow = {

}

export const strongShadow = {

}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;