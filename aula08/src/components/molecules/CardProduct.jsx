const CardProduct = ({ product, style }) => {
    return(
        <div className={style.card}>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <p>{product.description}</p>
            <a href="#">Adicionar</a>
        </div>
    )
}
export default CardProduct