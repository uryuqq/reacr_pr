import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Routing } from './routing/Routing'

export default function App() {
  return (
    <div className="layout">
      <Header />
      <main id="main">
        <Routing />
      </main>
      <Footer />
    </div>
  )
}
