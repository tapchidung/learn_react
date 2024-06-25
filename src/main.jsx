import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserPage from './pages/user.jsx';
import ProductPage from './pages/Product.jsx';
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import './styles/global.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/users",
    element: <UserPage />,
  },
  {
    path: "/Products",
    element: <ProductPage />,
  },
]);
<RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
