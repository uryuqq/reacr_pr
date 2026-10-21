import { products } from '../../data/products'
import { CatalogCard } from './CatalogCard/CatalogCard'
import s from './Catalog.module.css'

export function Catalog({ onAddToCart }) {
  return (
    <section className={`container ${s.catalog}`} id="catalog" aria-labelledby="catalog-title">
      <div className={s.heading}>
        <h2 id="catalog-title">Любимые вещи</h2>
        <a href="#catalog">Все товары →</a>
      </div>
      <div className={s.grid}>
        {products.map((product) => <CatalogCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
      </div>
    </section>
  )
}
