import "./CardProduct.css"

const CardProduct = ({src, titulo, desc, preco})=>{
    return(
        <div className="card">
            <img src={src} alt={titulo} />
            <div className="card-body">
                <h4>{titulo}</h4>
                <p>{desc}</p>
                <div className="card-footer">
                    <span>R$ {preco}</span>
                    <a href="#">Comprar</a>
                </div>
            </div>
        </div>
    )
}

    // CSS INPAGE
// const css = {
//     card:{
//         backgroundColor: "black"
//     }
// }
export default CardProduct