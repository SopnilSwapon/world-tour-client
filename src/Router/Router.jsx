import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddToristSpots from "../Pages/AddToristSpots/AddToristSpots";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllTouristsSpots from "../Pages/AllToursitsSpots/AllTouristsSpots";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
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
        },
        {
          path: '/viewDetails/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)

        },
        {
          path: '/allTouristsSpots',
          element: <AllTouristsSpots></AllTouristsSpots>
        }
      ]
    },
  ]);

export default router;