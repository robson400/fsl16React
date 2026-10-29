import { useParams } from "react-router-dom"
import PageDefault from "../../templates/PageDefault"
import useProduct from "../../../hooks/useProduct"

import styleProductDetails from "./ProductDetails.module.css"

const ProductsDetails = ()=>{
    const { id } = useParams()
    const {product, loading, error} = useProduct(id)

    return(
        <PageDefault>
            {
                loading ?
                <span>Carregando...</span>
                :
                <section>
                    <div>
                        <img 
                            src={product.image} 
                            alt={product.title} 
                        />
                    </div>
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <span>R$ {product.price} </span>
                        <button>Adicionar no Carrinho</button>
                    </div>
                </section>
            }
        </PageDefault>
    )
}

export default ProductsDetails