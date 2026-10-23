import { Link } from 'react-router'
import { PATH } from '../../routing/paths'
import { Banner } from '../../components/Banner/Banner'
import { Catalog } from '../../components/Catalog/Catalog'
import { Newsletter } from '../../components/Newsletter/Newsletter'
import s from '../../components/Catalog/Catalog.module.css'

export function HomePage() {
  return (
    <>
      <Banner />
      <section className={`container ${s.catalog}`} aria-labelledby="favorites-title">
        <div className={s.heading}>
          <h2 id="favorites-title">Любимые вещи</h2>
          <Link to={PATH.Catalog}>Все товары →</Link>
        </div>
        <Catalog />
      </section>
      <Newsletter />
    </>
  )
}
