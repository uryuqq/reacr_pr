import { Link } from 'react-router'
import { PATH } from '../../routing/paths'
import s from './Footer.module.css'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <div className={s.top}>
          <div className={s.brand}>
            <Link className={s.logo} to={PATH.Home}>ТИХО</Link>
            <p>Простые вещи. Больше уюта.</p>
          </div>
          <nav className={s.nav} aria-label="Навигация в подвале">
            <Link to={PATH.Home}>Главная</Link>
            <Link to={PATH.Catalog}>Каталог</Link>
            <Link to="/cart">Корзина</Link>
          </nav>
        </div>
        <p className={s.copyright}>© 2026 ТИХО. Все права защищены.</p>
      </div>
    </footer>
  )
}
