import { RouterProvider } from 'react-router-dom'
import { router } from './pages/routes'
import { ThemeProvider } from 'styled-components'
import CurrentTheme from './context/theme-context'
import { useContext } from 'react'
import GlobalStyle from './styles/reset-css'

const App = () => {
  const { currentTheme } = useContext(CurrentTheme)
  console.log('currentTheme: ', currentTheme)
  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
