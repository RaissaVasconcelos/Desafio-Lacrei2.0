import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'
import { PessoaUsuaria, Profissional } from './componentes/Users'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/pessoa-usuaria'} element={<PessoaUsuaria />} />
        <Route path={'/profissional'} element={<Profissional />} />
      </Routes>
      <GlobalStyle />
      <Footer />
    </ThemeProvider>
  )
}

export default App
