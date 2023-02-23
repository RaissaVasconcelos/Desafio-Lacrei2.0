import { NavLink } from 'react-router-dom'

export default function Footer() {
  return(
    <footer>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Pessoa Usuária</NavLink>
        <NavLink to='/'>Pessoa Profissional</NavLink>
      </nav>
    </footer>
  )
}