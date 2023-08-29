import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TopUp from "../pages/TopUp/TopUp";
import Profile from "../pages/Profile/Profile";
import Transaction from "../pages/Transaction/Transaction";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/top-up",
    element: <TopUp />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default routes;
