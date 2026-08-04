import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from  './Store'
import "@fontsource/bebas-neue";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/FitZone">
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
