import PageDefault from "../../templates/PageDefault.jsx"
import Cards from "../../organisms/Cards.jsx"

import styleProducts from "./Products.module.css"

const Products = ()=>{
    return(
        <PageDefault>
            <section className={styleProducts.container}>
                <h1>Produtos</h1>
                <Cards 
                    products={products} 
                    style={styleProducts} 
                />
            </section>
        </PageDefault>
    )
}

export default Products