import mug from '../../assets/home-mug.png'
import plate from '../../assets/home-plate.png'
import lamp from '../../assets/home-lamp.png'
import { CatalogCard } from './CatalogCard/CatalogCard'
import s from './Catalog.module.css'

export function Catalog() {
  return (
    <section className={`container ${s.catalog}`} id="catalog" aria-labelledby="catalog-title">
      <div className={s.heading}>
        <h2 id="catalog-title">Любимые вещи</h2>
        <a href="#catalog">Все товары →</a>
      </div>
      <div className={s.grid}>
        <CatalogCard
          name="Кружка “Утро”"
          category="Посуда"
          price="890 ₽"
          image={mug}
          alt="Молочная керамическая кружка на светлом деревянном столе"
        />
        <CatalogCard
          name="Тарелка “Круг”"
          category="Посуда"
          price="1 190 ₽"
          image={plate}
          alt="Светлая керамическая тарелка на деревянном столе"
        />
        <CatalogCard
          name="Лампа “Тихий вечер”"
          category="Освещение"
          price="4 900 ₽"
          image={lamp}
          alt="Настольная лампа с молочным основанием и тканевым абажуром"
        />
      </div>
    </section>
  )
}
