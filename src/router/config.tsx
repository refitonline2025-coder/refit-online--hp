import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import TermsPage from "../pages/terms/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
