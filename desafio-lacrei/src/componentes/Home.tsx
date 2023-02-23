import image from '../../public/rafiki 2.svg'
import { Header } from './Header'
import { Main, ButtonContainer, SectionText } from './Home.styled'

export function Home() {
  return (
    <Main>
      <SectionText>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <ButtonContainer>
          <button>Pessoa Usuária</button>
          <button>Pessoa Profissional</button>
        </ButtonContainer>
      </SectionText>
      <section>
        <img src={image} alt='Imagem de Profissionais'/>
      </section>
    </Main>
  )
}