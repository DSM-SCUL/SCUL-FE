import { RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./Styles/globalStyle.style";
import Router from "./router";

export function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </>
  );
}
