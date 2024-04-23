import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { ReviewWritePage } from "./Pages/ReviewWritePage";
import { MainPage } from "./Pages/MainPage";
import { LoginPage } from "./Pages/LoginPage";

const Router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/write",
        element: <ReviewWritePage />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default Router;
