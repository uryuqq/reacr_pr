import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Catalog } from './components/Catalog/Catalog'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'

export default function App() {
  return (
    <div className="layout" id="home">
      <Header />
      <main id="main">
        <Banner />
        <Catalog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
