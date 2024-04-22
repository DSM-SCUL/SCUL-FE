import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";
import { ReviewWritePage } from "./Pages/ReviewWritePage";

const Router = createBrowserRouter([
    {
        path: '',
        children: [
            {
                path: '/detail',
                element: <DetailPage />
            },
            {
                path: '/write',
                element: <ReviewWritePage />
            }
        ],
    },
]);

export default Router;
