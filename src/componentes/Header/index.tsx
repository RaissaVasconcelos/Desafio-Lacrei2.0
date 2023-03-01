import { HeaderContainer, NavContainer, NavbarLink } from './Header.style'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Lacrei</h1>
        <NavContainer>
          <NavbarLink color= '#018762' to='/' data-testid="home-header">Home</NavbarLink>
          <NavbarLink color= '#018762' to='/pessoa-usuaria' data-testid="usuaria-header">Pessoa Usuária</NavbarLink>
          <NavbarLink color= '#018762' to='/profissional' data-testid="profissional-header">Profissional</NavbarLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
