import { ReactNode, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"

interface Props {
    children?: ReactNode
}

export const AuthProvider = ({ children }: Props) => {

    // si el usuario esta cargando
    const [loadingUser, setLoadingUser] = useState(true)

    // usuario
    const [user] = useState(true)

    useEffect(() => {
        setLoadingUser(false)
    }, [])

    const loginUser = () => { return }
    const logoutUser = () => { return }
    const registerUser = () => { return }
    const checkUserState = () => { return }

    const contextData = { 
        user, loginUser, logoutUser, registerUser, checkUserState
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children  }
        </AuthContext.Provider>
    )
}
