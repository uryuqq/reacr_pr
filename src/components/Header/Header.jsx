import s from './Header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        <a href="#home" className={s.brand} aria-label="ТИХО — на главную">
          <span className={s.logo}>ТИХО</span>
          <span className={s.tagline}>вещи для дома</span>
        </a>
        <nav className={s.nav} aria-label="Основная навигация">
          <a className={s.active} href="#home" aria-current="page">Главная</a>
          <a href="#catalog">Каталог</a>
          <a href="#">Корзина</a>
        </nav>
      </div>
    </header>
  )
}
