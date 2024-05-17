import { ReactNode } from "react"

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

interface Props {
    children?: ReactNode
}

const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(',')
    }
})

export const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={ theme }>
            <CssBaseline />
            { children }
    </ThemeProvider>
  )
}
