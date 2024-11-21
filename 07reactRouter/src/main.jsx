import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact us/ContactUs.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contactUs",
        element: <Contact />
      }
    ]
  }
])*/

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path= '/' element = {<Layout />}>
    <Route path='' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
    <Route path='contactUs' element={<Contact/>}></Route>
    <Route path='user/:userid' element={<User/>}></Route>
  </Route>

))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
