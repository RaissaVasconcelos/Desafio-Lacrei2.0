import image from '../../public/home.svg'
import { Main, ButtonContainer, SectionText } from './Home.style'
import { Button } from '../componentes/Button';

export function Home() {
  return (
    <Main>
      <SectionText>
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <ButtonContainer>
          <Button
            link='/pessoa-usuaria'
            color='#FFFFFF'
            background='#018762'
            content='Pessoa Usuária'/>
          <Button
            link='/profissiona'
            color='#018762'
            background='#FFFFFF'
            content='Profissional'/>
        </ButtonContainer>
      </SectionText>
      <section>
        <img src={image} alt='Imagem de Profissionais'/>
      </section>
    </Main>
  )
}