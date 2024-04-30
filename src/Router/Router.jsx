import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddToristSpots from "../Pages/AddToristSpots/AddToristSpots";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllTouristsSpots from "../Pages/AllToursitsSpots/AllTouristsSpots";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import MyList from "../Pages/MyList/MyList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateSpots from "../Pages/MyList/UpdateSpots/UpdateSpots";
import CountrySpots from "../Pages/Home/Countries/CountrySpots";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/addTouristSpots',
          element: <PrivateRouter><AddToristSpots></AddToristSpots></PrivateRouter>
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
          element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
          loader: ({params}) => fetch(`https://world-tour-server-ten.vercel.app/spots/${params.id}`)

        },
        {
          path: '/allTouristsSpots',
          element: <AllTouristsSpots></AllTouristsSpots>
        },
        {
          path: '/myList',
          element: <PrivateRouter><MyList></MyList></PrivateRouter>
        },
        {
          path: '/updateTouristSpot/:id',
          element: <UpdateSpots></UpdateSpots>,
          loader: ({params}) => fetch(`https://world-tour-server-ten.vercel.app/spots/${params.id}`)
        },
        {
          path: '/countries/:country',
          element:<CountrySpots></CountrySpots>,
          loader: ({params}) => fetch(`https://world-tour-server-ten.vercel.app/spots/${params.country}`)
        }
      ]
    },
  ]);

export default router;