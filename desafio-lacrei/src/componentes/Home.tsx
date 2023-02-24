import image from '../../public/rafiki 2.svg'
import { Main, ButtonContainer, ButtonGreen, SectionText, Button } from './Home.styled'

export function Home() {
  return (
    <Main>
      <SectionText>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <ButtonContainer>
          <ButtonGreen>Pessoa Usuária</ButtonGreen>
          <Button>Profissional</Button>
        </ButtonContainer>
      </SectionText>
      <section>
        <img src={image} alt='Imagem de Profissionais'/>
      </section>
    </Main>
  )
}