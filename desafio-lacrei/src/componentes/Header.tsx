import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.content}>
      <section className={styles.title}>
        <h1>Lacrei</h1>
      </section>
      <nav className={styles.nav}>
        <p>Home</p>
        <p>Pessoa Usuária</p>
        <p>Profissional</p>
      </nav>
    </header>
  )
}
