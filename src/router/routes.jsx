import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layout/MyLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
