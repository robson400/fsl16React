import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext.jsx"
import PageDefault from "../../templates/PageDefault"
import Form from "../../organisms/Form"

import styleLogin from "./Login.module.css"
import { useEffect, useState } from "react"

const Login = ()=>{
    const navigate = useNavigate()
    
    const {login, session, error} = useAuth()
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    const campos = [
        {label: "Email", type: "email", isRequired: true, action: setEmail, value: email},
        {label: "Senha", type: "password", isRequired: true, action: setSenha, value: senha}
    ]

    useEffect(()=>{
        if(session){
            navigate("/tarefas")
        }
    },[])

    function onSubmit(e){
        e.preventDefault()


        const user = {
            email: email,
            senha: senha
        }

        const isSuccess = login(user)
        if(isSuccess){
            navigate("/tarefas")
        }
    }


    return(
        <PageDefault>
            <section className={styleLogin.container}>
                <div className={styleLogin.content}>
                    <h1>Login</h1>
                    <Form 
                        campos={campos} 
                        btnText={"Entrar"} 
                        style={styleLogin}
                        onSubmit={onSubmit}
                        error={error}
                    />
                    <Link to="/cadastro">
                        Não tem conta?
                    </Link>
                </div>
            </section>
        </PageDefault>
    )
}

export default Login