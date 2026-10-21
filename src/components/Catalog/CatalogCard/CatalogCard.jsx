import s from './CatalogCard.module.css'

export function CatalogCard({ name, category, price, image, alt }) {
  return (
    <article className={s.card}>
      <img className={s.image} src={image} alt={alt} width="451" height="320" loading="lazy" />
      <div className={s.info}>
        <p className={s.category}>{category}</p>
        <div className={s.row}>
          <h3>{name}</h3>
          <p className={s.price}>{price}</p>
        </div>
      </div>
      <button className="button" type="button">В корзину</button>
    </article>
  )
}
