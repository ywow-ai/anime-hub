import { createBrowserRouter } from "react-router";
import Home from "@/pages/Home";
import Watch from "@/pages/Watch";
import AppLayout from "@/components/layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "watch/:id",
        element: <Watch />,
      },
    ],
  },
]);
