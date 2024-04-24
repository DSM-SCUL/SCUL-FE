import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { SearchPage } from "./Pages/SearchPage";
import { ReviewWritePage } from "./Pages/ReviewWritePage";
import { MainPage } from "./Pages/MainPage";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { MyReviewPage } from "./Pages/MyReviewPage";

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
        path: "/MyReview",
        element: <MyReviewPage />
      },
      {
        path: "/write",
        element: <ReviewWritePage />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
      {
        path: "/Signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default Router;
