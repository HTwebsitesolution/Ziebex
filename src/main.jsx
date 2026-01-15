import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; color: red; font-size: 20px;">Error: Root element not found!</div>'
} else {
  try {
    const root = createRoot(rootElement)
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  } catch (error) {
    console.error('Error rendering app:', error)
    rootElement.innerHTML = `<div style="padding: 20px; color: red; font-size: 20px;">Error: ${error.message}</div>`
  }
}
