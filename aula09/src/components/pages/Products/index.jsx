import PageDefault from "../../templates/PageDefault.jsx"
import Cards from "../../organisms/Cards.jsx"
import useProducts from "../../../hooks/useProducts.js"

import styleProducts from "./Products.module.css"

const Products = ()=>{

    const {products, loading, error} = useProducts()

    return(
        <PageDefault>
            <section className={styleProducts.container}>
                <h1>Produtos</h1>
                {
                    loading ? 
                        <span>Carregando...</span>
                    :
                        error ?
                            <span>{error}</span>
                        :
                            <Cards 
                                products={products} 
                                style={styleProducts} 
                            />
                }
            </section>
        </PageDefault>
    )
}

export default Products