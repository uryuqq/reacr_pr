import { Catalog } from '../../components/Catalog/Catalog'
import s from './CatalogPage.module.css'

export function CatalogPage() {
  return (
    <section className={`container ${s.page}`} aria-labelledby="catalog-title">
      <header className={s.heading}>
        <h1 id="catalog-title">Каталог</h1>
        <p>Посуда для любимых завтраков. Свет для тёплых вечеров.</p>
      </header>
      <Catalog />
    </section>
  )
}
