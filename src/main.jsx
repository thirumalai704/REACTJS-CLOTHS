import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { AppProvider } from './context/AppContext'
import { UploadProvider } from './context/ProductContext'
createRoot(document.getElementById('root')).render(
  <AppProvider>
    <UploadProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>

    </UploadProvider>
  </AppProvider>,
)
