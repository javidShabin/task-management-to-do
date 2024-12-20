import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layout/MyLayout";
import HomePage from "../pages/Home";
import List from "../pages/List";
import { Edit } from "lucide-react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);
