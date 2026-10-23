import { Link } from 'react-router'
import { PATH } from '../../routing/paths'
import s from './Header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        <Link to={PATH.Home} className={s.brand} aria-label="ТИХО — на главную">
          <span className={s.logo}>ТИХО</span>
          <span className={s.tagline}>вещи для дома</span>
        </Link>
        <nav className={s.nav} aria-label="Основная навигация">
          <Link to={PATH.Home}>Главная</Link>
          <Link to={PATH.Catalog}>Каталог</Link>
          <Link to="/cart">Корзина</Link>
        </nav>
      </div>
    </header>
  )
}
