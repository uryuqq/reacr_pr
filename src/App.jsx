import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Catalog } from './components/Catalog/Catalog'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'

export default function App() {
  const [notice, setNotice] = useState('')

  function showCartNotice() {
    setNotice('Корзина пока не подключена: сейчас готова только главная страница.')
  }

  return (
    <div className="layout" id="home">
      <a className="skip-link" href="#main">Перейти к содержимому</a>
      <Header onCartClick={showCartNotice} />
      <main id="main">
        <Banner />
        <Catalog onAddToCart={showCartNotice} />
        <Newsletter />
      </main>
      <Footer onCartClick={showCartNotice} />
      {notice && (
        <div className="notice" role="status">
          <p>{notice}</p>
          <button type="button" aria-label="Закрыть уведомление" onClick={() => setNotice('')}>×</button>
        </div>
      )}
    </div>
  )
}
