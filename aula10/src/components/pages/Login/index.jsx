import { useNavigate, Link } from "react-router-dom"

import PageDefault from "../../templates/PageDefault"
import Form from "../../organisms/Form"

import styleLogin from "./Login.module.css"

const Login = ()=>{

    const navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault()
        navigate("/produtos")
    }

    const campos = [
        {label: "Email", type: "email", isRequired: true },
        {label: "Senha", type: "password", isRequired: true }
    ]

    return(
        <PageDefault>
            <section className={styleLogin.container}>
                <Form 
                    campos={campos} 
                    btnText={"Entrar"} 
                    style={styleLogin}
                    onSubmit={onSubmit}  
                />
                <Link to="/cadastro">
                    Não tem conta?
                </Link>
            </section>
        </PageDefault>
    )
}

export default Login