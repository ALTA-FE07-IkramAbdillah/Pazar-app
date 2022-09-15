import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const useLoginContext = () => {
    const context = useContext(LoginContext)
    const [cart, setCart] = context.cart

    const handleCart = (data) => {
        setCart([...cart,data])
    }

    return {
        cart,
        handleCart
    }
}

export const LoginProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
        <LoginContext.Provider
            value={{ cart: [cart, setCart] }}
        >
            {children}
        </LoginContext.Provider>
    )
}