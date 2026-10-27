import CardProduct from "../molecules/CardProduct.jsx"

const Cards = ({ products, style})=>{
    return(
        <div className={style.cards}>
            {
                products.map(p => 
                    <CardProduct 
                        product={p}
                        style={style} 
                    />
                )
            }
        </div>
    )
}

export default Cards