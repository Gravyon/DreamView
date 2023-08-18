import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./pages/Home";
import ReviewForm from "./components/ReviewForm";
import Default from "./layouts/Default";
import Movies from "./pages/Movies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Movies />,
      },
    ],
  },
  ,
  {
    path: "/review",
    element: <Default />,
    children: [
      {
        path: "/review",
        element: <ReviewForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
