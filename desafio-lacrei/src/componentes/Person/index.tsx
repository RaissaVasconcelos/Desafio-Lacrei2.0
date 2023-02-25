import { SectionText, Main, TextPerson } from './Person.style'

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
        <TextPerson>{text}</TextPerson>
      </SectionText>
      <img src={image} alt='Imagem de Usuários'/>
    </Main>
  )
}