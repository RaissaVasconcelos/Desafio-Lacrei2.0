import image from '../../../public/profissional.svg'

export function PessoaUsuaria() {
  return (
    <main>
      <section>
        <h1>Profissional</h1>
        <p>
        A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
        realizado por profissionais de qualidade e que atendam às suas
        necessidades de forma segura e acolhedora.
        </p>
      </section>
      <section>
        <img src={image} alt='Imagem de Profissionais'/>
      </section>
    </main>
  )
}