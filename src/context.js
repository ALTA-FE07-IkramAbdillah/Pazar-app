import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLoginContext = () => {
    const context = useContext(LoginContext)
    const [navLogin, setNavLogin] = context.navLogin

    const handleNavLogin = () => {
        setNavLogin(prev => !prev)
    }

    return {
        navLogin,
        handleNavLogin
    }
}

export const LoginProvider = ({ children }) => {
    const [navLogin, setNavLogin] = useState(false)

    return (
        <LoginContext.Provider
            value={{ navLogin: [navLogin, setNavLogin] }}
        >
            {children}
        </LoginContext.Provider>
    )
}