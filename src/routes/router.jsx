import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Profile from '../components/Profile/Profile';
import Register from '../components/Register/Register';
import Terms from '../components/Terms/Terms';
import Watch from '../components/Watch/Watch';
import LoginLayout from '../layout/LoginLayout';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />,
            loader: () => fetch (`https://facebook-demo-server.vercel.app/posts`)
        },
        {
          path: '/profile',
          element: <PrivateRoute><Profile /></PrivateRoute>
        },
        {
          path: "/terms",
          element: <Terms />
        },
        {
          path: "/watch",
          element: <Watch />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        
      ]
    },
    {
      path: '/register',
      element: <Register />
    },
  ]);

export default router;