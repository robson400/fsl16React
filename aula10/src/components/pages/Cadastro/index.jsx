import PageDefault from "../../templates/PageDefault"
import Form from "../../organisms/Form"

import styleCadastro from "./Cadastro.module.css"

const Cadastro = ()=>{

    function onSubmit(){
        alert("Cadastro")
    }

    const campos = [
        {label: "Nome", type: "text", isRequired: true },
        {label: "Email", type: "email", isRequired: true },
        {label: "Telefone", type: "text", isRequired: false },
        {label: "Senha", type: "password", isRequired: true }
    ]

    return(
        <PageDefault>
            <section className={styleCadastro.container}>
                <Form 
                    campos={campos} 
                    btnText={"Cadastrar"} 
                    style={styleCadastro}
                    onSubmit={onSubmit}  
                />
            </section>
        </PageDefault>
    )
}

export default Cadastro