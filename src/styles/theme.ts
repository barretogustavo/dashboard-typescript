import { useContext, useEffect, useState } from 'react'
import CurrentTheme from '../context/theme-context'

const commonColors = {
  label: '#8D6BB6',
  white: '#FFFFFF',
  success: '#00A100',
  error: '#33CCFF',
}

const font = {
  family: 'Arial, sans-serif',
  weights: {
    regular: 400,
    bold: 700,
  },
}

export const greenTheme = {
  colors: {
    ...commonColors,
    text: '#FFFFFF',
    primary: '#00A100',
    primaryBg: '#5bcc5b',
    secondary: '#FF57A6',
    secondaryBg: '#00A100',
    tertiaryBg: '#115011',
    balloonBg: '#113711',
  },
  font: { ...font },
}

export const panteneBlueTheme = {
  colors: {
    ...commonColors,
    text: '#585454',
    primary: '#8D6BB6',
    primaryBg: '#F2E4FA',
    secondary: '#5A3E8D',
    secondaryBg: '#D3B7E6',
    tertiaryBg: '#C0A3E0',
    balloonBg: '#E7D3F9',
  },
  font: { ...font },
}

export const defaultTheme = {
  colors: {
    ...commonColors,
    text: '#FFFFFF',
    primary: '#0074D9',
    primaryBg: '#8D6BB6',
    secondary: '#4192D9',
    secondaryBg: '#57387b',
    tertiaryBg: '#231038',
    balloonBg: '#57387b',
  },
  font: { ...font },
}

export const useHandleCurrentTheme = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const { currentTheme } = useContext(CurrentTheme)
  console.log(theme)
  useEffect(() => {
    setTheme(currentTheme)
  }, [currentTheme])

  return theme
}
