import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Chat from './chat'
import Dashboard from './dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
])
