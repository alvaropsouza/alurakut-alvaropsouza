import Home from '.';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Alurakut} from './src/lib/aluraKutCommons'

const GlobalStyle = createGlobalStyle`
  /* Reset css */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #2B2B2B;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`

const theme = {
  colors: {
    primary: 'red',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Home></Home>
    <GlobalStyle/>
    <ThemeProvider theme={theme}></ThemeProvider>
    </>
  )
}

export default MyApp
