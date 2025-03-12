import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Experience  from './pages/Experience.jsx'
import Project from './pages/Project.jsx'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Experience />
    <Project />
    <Footer />
  </StrictMode>,
)
