import { Link } from 'react-router'
import { PATH } from '../../routing/paths'
import s from './PageNotFound.module.css'

export function PageNotFound() {
  return (
    <section className={`container ${s.page}`}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Такого адреса пока нет на сайте.</p>
      <Link className="button" to={PATH.Home}>На главную</Link>
    </section>
  )
}
