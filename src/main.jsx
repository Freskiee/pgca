import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './styles/base/variables.css'
import './styles/base/utilities.css'
import './styles/base/globals.css'

import './styles/layout/navbar.css'
import './styles/layout/splash.css'
import './styles/layout/floating-actions.css'

import './styles/home/hero.css'
import './styles/home/about.css'
import './styles/home/practice-areas.css'
import './styles/home/rankings.css'
import './styles/home/offices.css'
import './styles/home/instagram.css'
import './styles/home/contact.css'
import './styles/home/footer.css'
import './styles/home/service-pages.css'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)