import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layout/MyLayout";
import HomePage from "../pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,

    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
    ],
  },
]);
