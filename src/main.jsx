import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout";
import Home from "./pages/home";
import Game from "./pages/game";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    <Analytics />
  </React.StrictMode>
);
