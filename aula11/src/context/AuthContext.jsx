import { useContext, createContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
    const userTest = {nome: "Robson", email: "robson@email.com", senha:"123"}
    const [users] = useState([userTest])


    const [user, setUser] = useState(null)
    const [session, setSession] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        const sessionToken = atob(localStorage.getItem("sessionToken"))

        if(sessionToken){
            const loggedUser = users.find(
                user => user.email === sessionToken
            )
            if(loggedUser){
                setUser({
                    email: loggedUser.nome
                })

                setSession(true)
            }

        }

    },[])

    const login = (dataUser)=>{
        setError("")
        if(!dataUser?.email || !dataUser?.senha){
            setError("Preencha todos os campos.")
            return false
        }

        const loggedUser = users.find(user => 
            user.email === dataUser.email &&
            user.senha === dataUser.senha
        )

        if(!loggedUser){
            setError("Email ou Senha Incorretos.")
            return false
        }

        setUser({
            email: loggedUser.nome
        }) 

        localStorage.setItem("sessionToken", btoa(loggedUser.email))
        setSession(true)
        return true
    }

    const logOut = ()=>{
        setError("")
        localStorage.removeItem("sessionToken")
        setSession(false)
        setUser(null)
        return false
    }

    return(
        <AuthContext.Provider 
            value={
                {
                    error,
                    session,
                    user,
                    login,
                    logOut,
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
}