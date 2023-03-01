import image from '../../images/profissional.svg'
import { Person } from '../../componentes/Person'

export function Profissional() {
  const text = `Buscamos recrutar pessoas profissionais
                da saúde que entendam as necessidades e
                se comprometam com o bem-estar da comunidade LGBTQIAPN+`

  return (
    <Person image={image} title='Profissional' text={text} />
  )
}