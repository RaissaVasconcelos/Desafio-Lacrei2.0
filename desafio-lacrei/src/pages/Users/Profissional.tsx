import image from '../../images/profissional.svg'
import { Person } from '../../componentes/Person'

export function Profissional() {
  const text = `A Lacrei garante que pessoas LGBTQIAPN + recebam
                atendimento realizado por profissionais de qualidade
                e que atendam às suas necessidades de forma segura e acolhedora.`

  return (
    <Person image={image} title='Profissional' text={text} />
  )
}