import s from './Footer.module.css'

export function Footer({ onCartClick }) {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <div className={s.top}>
          <div className={s.brand}>
            <a className={s.logo} href="#home">ТИХО</a>
            <p>Простые вещи. Больше уюта.</p>
          </div>
          <nav className={s.nav} aria-label="Навигация в подвале">
            <a href="#home">Главная</a>
            <a href="#catalog">Каталог</a>
            <button type="button" onClick={onCartClick}>Корзина</button>
          </nav>
        </div>
        <p className={s.copyright}>© 2026 ТИХО. Все права защищены.</p>
      </div>
    </footer>
  )
}
