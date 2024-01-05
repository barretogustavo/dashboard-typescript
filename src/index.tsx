import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CurrentThemeProvider } from './context/theme-context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const AppContainer = () => {
  return (
    <React.StrictMode>
      <CurrentThemeProvider>
        <App />
      </CurrentThemeProvider>
    </React.StrictMode>
  )
}

root.render(<AppContainer />)
