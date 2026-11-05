import { useParams } from "react-router-dom"
import PageDefault from "../../templates/PageDefault.jsx"
import NotFound from "../NotFound"
import useProduct from "../../../hooks/useProduct"

import styleProductDetails from "./ProductDetails.module.css"

const ProductsDetails = ()=>{
    const { id } = useParams()
    const {product, loading, error} = useProduct(id)

    if(loading){
        return <PageDefault>
            <span>Carregando...</span>
        </PageDefault>
    }

    if(!product || error){
        return <NotFound error={error} page={"produtos"} />
    }


    return(
        <PageDefault>
            <section className={styleProductDetails.container}>
                <div className={styleProductDetails.containerImg}>
                    <img 
                        src={product.image} 
                        alt={product.title} 
                    />
                </div>
                <div className={styleProductDetails.content}>
                    <h1>{product.title}</h1>
                    <div className={styleProductDetails.line}></div>
                    <p>{product.description}</p>
                    <div className={styleProductDetails.actions}>
                        <span>R$ {product.price} </span>
                        <button>Adicionar no Carrinho</button>
                    </div>
                </div>
            </section>
        </PageDefault>
    )
}

export default ProductsDetails