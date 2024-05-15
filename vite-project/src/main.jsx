import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import MyComponent from './MyComponent'
import MyFeature from './MyFeature'
import First from './First'
import Second from './Second'
import routeOne from './one'
import routeTwo from './two'

const router = createBrowserRouter([
  {path:"/", element: <MyComponent/>},
  {path:"/blog",
  element: <MyFeature />,
  children: [
    {
      path: "first",
      element: <First/>
    },
    {
      path: "second",
      element: <Second/>
    },
    routeOne,
    routeTwo
  ]
  }
])

// npm install react-router-dom

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
