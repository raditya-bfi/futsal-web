import 'regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
// eslint-disable-next-line import/order
import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

// styles
import './index.css'
import './font.css'
import { HelmetProvider } from 'react-helmet-async'

import { AuthProvider } from '~/context/AuthProvider'
import { LoadingProvider } from '~/context/LoadingProvider'
import theme from '~/styles/theme'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoadingProvider>
          <HelmetProvider>
            <StyledEngineProvider injectFirst>
              <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <App />
              </MuiThemeProvider>
            </StyledEngineProvider>
          </HelmetProvider>
        </LoadingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
