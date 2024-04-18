import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { MainPage } from "./Page/MainPage";

const Router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export default Router;
