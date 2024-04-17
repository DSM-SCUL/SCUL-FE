import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "./Pages/DetailPage";

const Router = createBrowserRouter([
    {
        path: '',
        children: [
            {
                path: '/detail',
                element: <DetailPage/>
            }
        ],
    },
]);

export default Router;