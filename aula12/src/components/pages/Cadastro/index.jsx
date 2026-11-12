import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext.jsx"
import PageDefault from "../../templates/PageDefault"
import Form from "../../organisms/Form"

import styleCadastro from "./Cadastro.module.css"

const Cadastro = ()=>{
    const navigate = useNavigate()
    const {register, error} = useAuth()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [senha, setSenha] = useState("")

    const campos = [
        {label: "Nome", type: "text", isRequired: true, action: setNome, value: nome },
        {label: "Email", type: "email", isRequired: true, action: setEmail, value: email },
        {label: "Telefone", type: "text", isRequired: false, action: setTel, value: tel },
        {label: "Senha", type: "password", isRequired: true, action: setSenha, value: senha }
    ]

    function onSubmit(e){
        e.preventDefault()


        const user = {
            nome: nome,
            email: email,
            tel: tel,
            senha: senha
        }

        const isSuccess = register(user)
        if(isSuccess){
            navigate("/tarefas")
        }
    }

    return(
        <PageDefault>
            <section className={styleCadastro.container}>
                <div className={styleCadastro.content}>
                    <h1>Cadastro</h1>
                    <Form 
                        campos={campos} 
                        btnText={"Cadastrar"} 
                        style={styleCadastro}
                        onSubmit={onSubmit}
                        error={error}  
                    />
                    <Link to="/login">
                        Já tem conta?
                    </Link>
                </div>
            </section>
        </PageDefault>
    )
}

export default Cadastro

