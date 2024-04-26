import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddToristSpots from "../Pages/AddToristSpots/AddToristSpots";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>fetch('http://localhost:5000/spots')
        },
        {
          path: '/addTouristSpots',
          element: <AddToristSpots></AddToristSpots>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router;