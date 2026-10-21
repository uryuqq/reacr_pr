import s from './CatalogCard.module.css'

export function CatalogCard({ product, onAddToCart }) {
  return (
    <article className={s.card}>
      <img className={s.image} src={product.image} alt={product.alt} width="451" height="320" loading="lazy" />
      <div className={s.info}>
        <p className={s.category}>{product.category}</p>
        <div className={s.row}>
          <h3>{product.name}</h3>
          <p className={s.price}>{product.price.toLocaleString('ru-RU')} ₽</p>
        </div>
      </div>
      <button className="button" type="button" aria-label={`В корзину: ${product.name}`} onClick={onAddToCart}>В корзину</button>
    </article>
  )
}
