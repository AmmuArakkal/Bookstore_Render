import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import CreateBook from './routes/createBook';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import DeleteBook from './routes/DeleteBook';
import EditBook from './routes/EditBook';
import Home from './routes/Home';
import ShowBook from './routes/ShowBook';
import Roots from './routes/Roots';
import Login from './routes/Login';
import AdminPage from './routes/AdminPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/books/create",
        element: <CreateBook />,
      },
      {
        path: "/books/delete/:id",
        element: <DeleteBook />,
      },
      {
        path: "/books/edit/:id",
        element: <EditBook />,
      },

      {
        path: "/books/details/:id",
        element: <ShowBook />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/adminpage",
        element: <AdminPage />
      },

    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
