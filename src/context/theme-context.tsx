import React, { createContext, useState } from 'react'
import { Theme } from '../styles/styled'
import { defaultTheme } from '../styles/theme'

type CurrentThemeProps = {
  currentTheme: Theme
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const CurrentTheme = createContext<CurrentThemeProps>({
  currentTheme: defaultTheme,
  setCurrentTheme: () => {},
})

type Props = {
  children: React.ReactNode
}

const CurrentThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme)
  return (
    <CurrentTheme.Provider value={{ currentTheme, setCurrentTheme }}>
      <>{children}</>
    </CurrentTheme.Provider>
  )
}

export { CurrentThemeProvider }
export default CurrentTheme
