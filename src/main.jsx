
// .................................


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
// import Header from "./Header/Header.jsx";
import About from "./comonents/About/About.jsx";
import Contact from "./comonents/Contact/Contact.jsx";
import Users from "./comonents/Users/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>

      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
    ]
  },
  // {
  //   path: 'header',
  //   element: <Header></Header>
  // }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <App></App> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);