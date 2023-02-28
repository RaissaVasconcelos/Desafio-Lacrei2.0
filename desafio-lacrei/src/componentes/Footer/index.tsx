import { ContainerLogo, ContainerNav, ContainerFooter, NavbarLink } from './Footer.style'
import fb from '../../images/FacebookLogo.svg'
import insta from '../../images/InstagramLogo.svg'
import linkedin from '../../images/LinkedinLogo.svg'

export function Footer() {
  return(
    <ContainerFooter>
      <ContainerNav>
        <NavbarLink color='black' to='/'>Home</NavbarLink>
        <NavbarLink color='black' to='/pessoa-usuaria'>Pessoa Usuária</NavbarLink>
        <NavbarLink color='black' to='/profissional'>Profissional</NavbarLink>
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