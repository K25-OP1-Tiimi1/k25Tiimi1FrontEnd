import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ProductList from './ProductList.js'
import HomePage from './HomePage.js'
import AboutUs from './AboutUs'
import UserList from './UserList.js'
import Account from './Account.js'

//routter
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: "account",
        element:<Account />
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
