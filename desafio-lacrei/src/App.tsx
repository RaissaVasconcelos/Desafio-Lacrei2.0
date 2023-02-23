import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './style/themes/default'
import { GlobalStyle } from './style/global'
import { Header } from './componentes/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <div className="App">
        Lacrei
      </div>
    </ThemeProvider>
  )
}

export default App
