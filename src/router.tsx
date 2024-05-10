import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { SearchPage } from "./Pages/SearchPage";
import { ReviewWritePage } from "./Pages/ReviewWritePage";
import { MainPage } from "./Pages/MainPage";
import { LoginPage } from "./Pages/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage";
import { MyReviewPage } from "./Pages/MyReviewPage";
import { BookMarkPage } from "./Pages/BookMarkPage";

const Router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/cultures/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "/Search",
        element: <SearchPage />,
      },
      {
        path: "/MyReview",
        element: <MyReviewPage />,
      },
      {
        path: "/BookMark",
        element: <BookMarkPage />,
      },
      {
        path: "/write/:id",
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
