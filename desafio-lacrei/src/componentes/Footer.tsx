import { NavLink } from 'react-router-dom'
import { ContainerLogo, ContainerNav, ContainerFooter } from './Footer.style'
import fb from '../../public/FacebookLogo.svg'
import insta from '../../public/InstagramLogo.svg'
import linkedin from '../../public/LinkedinLogo.svg'

export default function Footer() {
  return(
    <ContainerFooter>
      <ContainerNav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Pessoa Usuária</NavLink>
        <NavLink to='/'>Pessoa Profissional</NavLink>
      </ContainerNav>
      <ContainerLogo>
        <img src={fb} alt="Logo Facebook" />
        <img src={insta} alt="Logo Insta" />
        <img src={linkedin} alt="Logo Linkedin" />
      </ContainerLogo>
      <p>Desafio Front-End Lacrei</p>
    </ContainerFooter>
  )
}