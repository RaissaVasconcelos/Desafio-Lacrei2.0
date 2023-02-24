import { HeaderContainer, NavContainer, NavbarLink } from './Header.style'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Lacrei</h1>
        <NavContainer>
          <NavbarLink to='/'>Home</NavbarLink>
          <NavbarLink to='/pessoa-usuaria'>Pessoa Usuária</NavbarLink>
          <NavbarLink to='/profissional'>Profissional</NavbarLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
