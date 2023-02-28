import image from '../../images/pessoa-usuaria.svg'
import { Person } from '../../componentes/Person'

export function PessoaUsuaria() {
  const text = `A Lacrei garante que pessoas LGBTQIAPN +
                recebam atendimento realizado por profissionais
                de qualidade e que atendam às suas necessidades
                de forma segura e acolhedora.`
  return (
    <Person image={image} title='Pessoa Usuária' text={text} />
  )
}