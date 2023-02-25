import { HeaderContainer, NavContainer, NavbarLink } from './Header.style'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Lacrei</h1>
        <NavContainer>
          <NavbarLink color= '#018762' to='/'>Home</NavbarLink>
          <NavbarLink color= '#018762' to='/pessoa-usuaria'>Pessoa Usuária</NavbarLink>
          <NavbarLink color= '#018762' to='/profissional'>Profissional</NavbarLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
