import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import MenuPage from "./pages/MenuPage";
import StorePage from "./pages/StorePage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "store",
        element: <StorePage />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },
    ],
  },
]);

export default router;
