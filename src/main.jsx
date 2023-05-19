import 'regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

// styles
import './index.css'
import './font.css'
import theme from '~/styles/theme'
import { AuthProvider } from '~/context/AuthProvider'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </MuiThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
