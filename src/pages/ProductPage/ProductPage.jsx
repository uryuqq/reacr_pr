import { Link } from 'react-router'
import { PATH } from '../../routing/paths'
import mug from '../../assets/home-mug.png'
import s from './ProductPage.module.css'

export function ProductPage() {
  return (
    <section className={`container ${s.page}`} aria-labelledby="product-title">
      <nav className={s.breadcrumbs} aria-label="Хлебные крошки">
        <Link to={PATH.Home}>Главная</Link>
        <span>/</span>
        <Link to={PATH.Catalog}>Каталог</Link>
        <span>/</span>
        <span>Кружка “Утро”</span>
      </nav>
      <div className={s.layout}>
        <img className={s.image} src={mug} alt="Молочная керамическая кружка на деревянном столе" width="700" height="620" />
        <div className={s.info}>
          <p className={s.category}>Посуда</p>
          <h1 id="product-title">Кружка “Утро”</h1>
          <p className={s.description}>Для первого кофе и чая без спешки. Керамическая кружка с мягкой молочной глазурью удобно лежит в руке и легко вписывается в любой день.</p>
          <p className={s.price}>890 ₽</p>
          <p className={s.stock}>В наличии</p>
          <button className="button" type="button">В корзину</button>
          <div className={s.details}>
            <h2>Характеристики</h2>
            <p><span>Материал</span><span>Керамика</span></p>
            <p><span>Объём</span><span>350 мл</span></p>
            <p><span>Цвет</span><span>Молочный</span></p>
          </div>
        </div>
      </div>
      <div className={s.note}>
        <p><strong>Для каждого дня</strong><br />Можно мыть в посудомоечной машине и использовать в микроволновой печи.</p>
        <p><strong>Бережно доставим</strong><br />Надёжная упаковка. Стоимость и срок доставки рассчитаем при оформлении.</p>
      </div>
    </section>
  )
}
