import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/main.css'
import { ThemeProvider } from '../context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
