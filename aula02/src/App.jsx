import Cards from "./Cards.jsx"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import './App.css'

function App() {

  return (
    <div className="container">
      <Header />
      <main className="">
        <Cards />
      </main>
      <Footer />
    </div>
  )
}

export default App
