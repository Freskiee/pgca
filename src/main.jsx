import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/variables.css'
import './styles/globals.css'
import './styles/utilities.css'
import './styles/sections/navbar.css'
import './styles/sections/hero.css'
import './styles/sections/about.css'
import './styles/sections/services.css'
import './styles/sections/rankings.css'
import './styles/sections/instagram.css'
import './styles/sections/partners.css'
import './styles/sections/gallery.css'
import './styles/sections/contact.css'
import './styles/sections/footer.css'
import './styles/sections/service-pages.css'
import './styles/sections/splash.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)