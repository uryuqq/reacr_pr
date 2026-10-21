import s from './Newsletter.module.css'

export function Newsletter() {
  return (
    <section className={`container ${s.section}`} aria-labelledby="newsletter-title">
      <div className={s.panel}>
        <div className={s.copy}>
          <h2 id="newsletter-title">Письма с уютом</h2>
          <p>Новые вещи, идеи для дома и маленькие поводы замедлиться. Без лишних писем.</p>
        </div>
        <div className={s.form}>
          <div className={s.fields}>
            <input type="email" name="email" placeholder="Ваш email" aria-label="Ваш email" autoComplete="email" required />
            <button className="button" type="button">Подписаться</button>
          </div>
          <p className={s.consent}>Нажимая «Подписаться», вы соглашаетесь с обработкой данных.</p>
        </div>
      </div>
    </section>
  )
}
