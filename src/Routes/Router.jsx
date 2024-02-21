import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddProduct from "../Pages/Add Product/AddProduct";
import Protection from "../Provider/Protection/Protection";





const Router = createBrowserRouter([

  {

    path: "/",

    element: <MainLayout></MainLayout>,

    children: [

      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/register",
        element: <Register></Register>
      },

      {
        path: "/add-product",
        element: <Protection><AddProduct></AddProduct></Protection>
      },

    ]

  },

]);

export default Router;
