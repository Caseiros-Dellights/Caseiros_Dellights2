import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// pages
import Home from './routes/Home.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preparo from './routes/Preparo.jsx'
import SobreNos from './routes/SobreNos.jsx'
import Entregas from './routes/Entregas.jsx'
import Valores from './routes/Valores.jsx'
import Marmitas from './routes/Marmitas.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/preparo",
        element: <Preparo />,
      },
      {
        path: "/sobrenos",
        element: <SobreNos />,
      },
      {
        path: "/entregas",
        element: <Entregas />,
      },
      {
        path: "/valores",
        element: <Valores />,
      },
      {
        path: "/marmitas",
        element: <Marmitas />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
