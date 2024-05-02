import { useState } from 'react'
import Update from './Components/Update'
import Delete from './Components/Delete'
import Navbar from './Components/Navbar'
import CreateUsers from './Components/CreateUser'
import Login from './Components/Login'
import Screen from './Components/Screen'
import Main from './Components/Main'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Users from './Components/Users'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },

    {
      path: "/",
      element: <><Navbar /><Main /></>
    },
    {
      path: "/users",
      element: <><Navbar /><Users /></>
    },
    {
      path: "/screen",
      element: <><Navbar /><Screen /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/create",
      element: <><Navbar /><CreateUsers/></>
    },
    {
        path: "/update/:id",
        element: <><Navbar /><Update/></>
      },
    {
      path: "/delete",
      element: <><Navbar /><Delete/></>
    },  
    {
      path: "/about",
      element: <><Navbar /><About/></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact/></>
    }
  ])
return (
<div className='bg-slate-300/20'>
 <RouterProvider router={router} />
</div>
)
}

export default App
