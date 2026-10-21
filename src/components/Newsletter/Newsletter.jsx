import { useState } from 'react'
import s from './Newsletter.module.css'

export function Newsletter() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Это учебный макет. Отправка писем пока не подключена; ваш email никуда не отправлен.')
  }

  return (
    <section className={`container ${s.section}`} aria-labelledby="newsletter-title">
      <div className={s.panel}>
        <div className={s.copy}>
          <h2 id="newsletter-title">Письма с уютом</h2>
          <p>Новые вещи, идеи для дома и маленькие поводы замедлиться. Без лишних писем.</p>
        </div>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.fields}>
            <input type="email" name="email" placeholder="Ваш email" aria-label="Ваш email" autoComplete="email" required />
            <button className="button" type="submit">Подписаться</button>
          </div>
          <p className={s.consent}>Нажимая «Подписаться», вы соглашаетесь с обработкой данных.</p>
          {message && <p className={s.feedback} role="status">{message}</p>}
        </form>
      </div>
    </section>
  )
}
