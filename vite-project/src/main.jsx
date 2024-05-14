import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MyComponent from './MyComponent'
import MyFeature from './MyFeature'

const router = createBrowserRouter([
  {path:"/", element: <MyComponent/>},
  {path:"/blog", element: <MyFeature />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
