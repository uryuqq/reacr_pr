import { Link } from 'react-router'
import { PATH } from '../../../routing/paths'
import s from './CatalogCard.module.css'

export function CatalogCard({ name, category, price, image, alt }) {
  return (
    <article className={s.card}>
      <Link to={PATH.Product}>
        <img className={s.image} src={image} alt={alt} width="451" height="320" loading="lazy" />
      </Link>
      <div className={s.info}>
        <p className={s.category}>{category}</p>
        <div className={s.row}>
          <h3>{name}</h3>
          <p className={s.price}>{price}</p>
        </div>
      </div>
      <Link className="button" to={PATH.Product}>Подробнее</Link>
    </article>
  )
}
