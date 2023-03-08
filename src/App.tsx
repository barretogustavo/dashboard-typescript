import React from 'react'
import { RouterProvider } from 'react-router-dom'
import PanelLayout from './layouts/menu'
import { router } from './pages/routes'

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
