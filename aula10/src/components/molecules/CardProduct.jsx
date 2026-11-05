import { Link } from "react-router-dom"


const CardProduct = ({ product, style }) => {
    return(
        <div className={style.card}>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <Link to={`/p/${product.id}`}>
                Ver mais
            </Link>
        </div>
    )
}
export default CardProduct