import { X, User} from "lucide-react"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../context/AuthContext.jsx"

const BtnPerfil = ()=>{
    const navigate = useNavigate()
    const {user, session, logOut} = useAuth()

    const redirect = (e)=>{
        e.preventDefault()

        logOut()
        navigate("/tarefas")
    }
    return(
        <>
            {
                session ? 
                <div className="logout">
                    <button onClick={redirect}>
                        <X />
                        Sair
                    </button>
                    <span>Olá, {user.nome}</span>
                </div>
                :
                <Link to="/login" className="login">
                        <User size={30} />
                    <div>
                        <span>Olá, Visitante</span>
                        <p>Faça seu Login.</p>
                    </div>
                </Link>
            }
        </>
    )
}

export default BtnPerfil