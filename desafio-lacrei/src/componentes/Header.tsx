import { HeaderContainer, NavContainer } from './Header.style'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1>Lacrei</h1>
        <NavContainer>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>Pessoa Usuária</NavLink>
          <NavLink to='/'>Pessoa Profissional</NavLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  )
}
