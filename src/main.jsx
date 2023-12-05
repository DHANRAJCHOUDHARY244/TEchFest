import React from 'react'
import ReactDOM from 'react-dom/client'
import Loader from './loader.jsx'
import RouterComponent from './router/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterComponent/>
  </React.StrictMode>,
)
