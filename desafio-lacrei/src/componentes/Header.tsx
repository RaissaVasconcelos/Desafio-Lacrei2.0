import { HeaderContainer, NavContainer } from './Header.style'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Lacrei</h1>
        <NavContainer>
          <p>Home</p>
          <p>Pessoa Usuária</p>
          <p>Profissional</p>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
