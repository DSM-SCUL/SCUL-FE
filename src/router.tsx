import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { MainPage } from "./Pages/MainPage";
import { SearchPage } from "./Pages/SearchPage";

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
        path: "/Search",
        element: <SearchPage />,
       },
       {
          path: '/write',
          element: <ReviewWritePage />
       }
        ],
    },
]);

export default Router;
