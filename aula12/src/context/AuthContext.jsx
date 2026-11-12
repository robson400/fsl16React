import { useContext, createContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    
    const [users, setUsers] = useState(()=>{
        const savedUsers = localStorage.getItem("users")
        return savedUsers ? JSON.parse(savedUsers) : []
    })


    const [user, setUser] = useState({})
    const [session, setSession] = useState(false)
    const [error, setError] = useState("")


    // Enviamos os cadastros para o Local Storage:
    useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(users)) 
    },[users])

    // Verifica se ja tem algum token:
    useEffect(()=>{
        const sessionToken = atob(localStorage.getItem("sessionToken"))

        if(sessionToken){
            const loggedUser = users.find(
                user => user.email === sessionToken
            )
            if(loggedUser){
                setUser({
                    nome: loggedUser.nome
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
            nome: loggedUser.nome
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

    const register = (dataUser) => {
        setError("")

        if(!dataUser.nome || !dataUser.email || !dataUser.senha){
            setError("Preencha todos os campos!")
            return false
        }

        const isEmailExists = users.some(
            user => user.email === dataUser.email
        )

        if(isEmailExists){
            setError("Este email já está cadastrado.")
            return false
        }

        const newUser = {
            id: Date.now(),
            nome: dataUser.nome,
            email: dataUser.email,
            tel: dataUser.tel,
            senha: dataUser.senha
        }

        setUsers(prevUsers => [...prevUsers, newUser])

        setUser({
            nome: dataUser.nome
        })
        
        localStorage.setItem("sessionToken", btoa(dataUser.email))
        setSession(true)
        return true
    
    }

    return(
        <AuthContext.Provider 
            value={
                {
                    users,
                    user,
                    error,
                    session,
                    login,
                    logOut,
                    register
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