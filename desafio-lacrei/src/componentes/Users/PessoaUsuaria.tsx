import image from '../../../public/pessoa-usuaria.svg'

export function PessoaUsuaria() {
  return (
    <main>
      <h1>Pessoa Usuária</h1>
      <section>
        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
          realizado por profissionais de qualidade e que atendam às suas
          necessidades de forma segura e acolhedora.
        </p>
      </section>
      <section>
        <img src={image} alt='Imagem de Usuários'/>
      </section>
    </main>
  )
}