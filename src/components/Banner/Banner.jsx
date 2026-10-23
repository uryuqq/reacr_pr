import { Link } from 'react-router'
import { PATH } from '../../routing/paths'
import interior from '../../assets/interior.png'
import s from './Banner.module.css'

export function Banner() {
  return (
    <section className={`container ${s.banner}`} aria-labelledby="hero-title">
      <div className={s.content}>
        <p className={s.eyebrow}>ПОСУДА И ОСВЕЩЕНИЕ ДЛЯ ДОМА</p>
        <h1 id="hero-title">Вещи, с которыми дома хорошо.</h1>
        <p className={s.description}>Любимая кружка для неспешного утра и мягкий свет для тихого вечера. Простые вещи, которые делают дом вашим.</p>
        <Link className="button" to={PATH.Catalog}>Перейти в каталог</Link>
      </div>
      <img className={s.image} src={interior} width="700" height="440" alt="Светлая гостиная с мягким диваном, керамической лампой и чашкой на столике" fetchPriority="high" />
    </section>
  )
}
