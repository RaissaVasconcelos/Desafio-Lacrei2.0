import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { Routes, Route } from 'react-router-dom'
import { Home } from './componentes/Home'
import { Header } from './componentes/Header'
import Footer from './componentes/Footer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />}/>
      </Routes>
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default App
