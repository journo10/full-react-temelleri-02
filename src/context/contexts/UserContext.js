import { createContext, useState } from "react"
import { useContext } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const values = {user, setUser};
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);//kendi hookumuz useUser ,component her defasında useContext yazmamak için