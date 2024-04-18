import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./Styles/globalStyle.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles/theme";
import Router from "./router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
