import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './dashboard'
import Employee from './employee'

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
    path: '/employee',
    element: <Employee />,
  },
])
