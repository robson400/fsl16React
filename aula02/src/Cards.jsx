import CardProduct from './CardProduct.jsx'
import Manga from './assets/images/manga.jpeg'
import Cereja from './assets/images/cereja.jpeg'
import Abacaxi from './assets/images/abacaxi.avif'

import "./Cards.css"

const Cards = ()=>{
    return(
        <section className="section-produtos">
            <h1>Componente limpo</h1>
            <div className="cards">
                <CardProduct
                    src={Manga} 
                    titulo="Manga Rosa" 
                    desc="Manguinha gostosa" 
                    preco="25"
                />
                <CardProduct
                    src={Cereja} 
                    titulo="Cereja Vermelha" 
                    desc="Cereja gostosa" 
                    preco="18" 
                />
                <CardProduct
                    src={Abacaxi} 
                    titulo="Abacaxi Amarelo" 
                    desc="Abacaxi gostoso" 
                    preco="30" 
                />
            </div>
        </section>
    )
}

export default Cards