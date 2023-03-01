import { ContainerLogo, ContainerNav, ContainerFooter, NavbarLink } from './Footer.style'
import fb from '../../images/FacebookLogo.svg'
import insta from '../../images/InstagramLogo.svg'
import linkedin from '../../images/LinkedinLogo.svg'

export function Footer() {
  return(
    <ContainerFooter>
      <ContainerNav>
        <NavbarLink color='black' to='/' data-testid="home-footer">Home</NavbarLink>
        <NavbarLink color='black' to='/pessoa-usuaria' data-testid="usuaria-footer">Pessoa Usuária</NavbarLink>
        <NavbarLink color='black' to='/profissional' data-testid="profissional-footer">Profissional</NavbarLink>
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