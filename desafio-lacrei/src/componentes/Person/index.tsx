import { SectionText, Main } from './Person.style'

interface PersonProps {
  image: string
  text: string
  title: string
}

export function Person({ text, image, title }: PersonProps) {
  return (
    <Main>
      <SectionText>
        <h1>{title}</h1>
        <p>{text}</p>
      </SectionText>
      <section>
        <img src={image} alt='Imagem de Usuários'/>
      </section>
    </Main>
  )
}