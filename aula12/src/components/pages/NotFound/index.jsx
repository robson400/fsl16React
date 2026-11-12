import { Link } from"react-router-dom"

import PageDefault from "../../templates/PageDefault.jsx"
import dogError from "../../../assets/dog.png"

import styleNotFound from "./NotFound.module.css"

const NotFound = ({ error, page="" }) => {

    return(
        <PageDefault>
            <section className={styleNotFound.container}>
                <img src={dogError} alt="Dog Triste" />
                <h1>404 - Página não encontrada!</h1>
                <p>{error ? error : "Desculpe, não encontramos o que você procura."}</p>
                
                <Link to={`/${page}`}>
                    {"<"} Voltar
                </Link>
            </section>
        </PageDefault>
    )
}

export default NotFound