import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MyComponent from './MyComponent'
import MyFeature from './MyFeature'

// https://drive.proton.me/urls/99JEVR17YM#8tlX945Qgyar

const router = createBrowserRouter([
  {path:"/", element: <MyComponent/>},
  {path:"/blog", element: <MyFeature />}
])

// npm install react-router-dom

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
