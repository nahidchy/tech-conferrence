import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './LayOut/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Speakers from './Pages/Speakers/Speakers';
import SpeakerDetails from './Pages/SpeakerDetails';
import About from './Pages/About/About';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<><h2 className='text-4xl lg:text-7xl font-extrabold text-center mt-28 lg:mt-96'>404 page not found 😢😢😢</h2></>,
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/speakers',
        element:<PrivateRoute><Speakers/></PrivateRoute>
      },
      {
        path:'/speakers/:id',
        loader:()=> fetch('/speaker.json'),
        element:<SpeakerDetails/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
