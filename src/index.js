import React from 'react'
import { render } from 'react-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './App'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: orange[200],
      main: '#FB8C00', //these first two are synonymous
      dark: '#EF6C00',
      contrastText: 'rgb(0,0,0)'
    }
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <App />,
  </MuiThemeProvider>,
  document.getElementById('root')
)
