import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ProductTable from './ProductTable'
import HomePage from './HomePage'


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
        element: <ProductTable />,
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
