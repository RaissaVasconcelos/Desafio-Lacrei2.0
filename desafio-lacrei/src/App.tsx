import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { Routes, Route } from 'react-router-dom'
import { Home, PessoaUsuaria, Profissional } from './pages'
import { Header, Footer } from './componentes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/pessoa-usuaria'} element={<PessoaUsuaria />} />
        <Route path={'/profissional'} element={<Profissional />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
