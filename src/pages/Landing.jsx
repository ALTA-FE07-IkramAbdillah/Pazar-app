// Import Library
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios"
// Import Components
import Forms from "../components/Forms";
import backImage from "../assets/backLanding.png"
import heroImage from "../assets/hero.png"
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context";

const Landing = () => {
    const navigate = useNavigate()
    const { navLogin, handleNavLogin } = useLoginContext()
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    // Submit Register
    const handleRegister = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/users/register", user)
            .then(() => {
                alert("Register Successfully")
                setLogin(prev => !prev)
            })
    }

    // Input Register
    const inputRegister = (e) => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }

    // Submit Login
    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", userLogin)
            .then(() => {
                handleNavLogin()
                navigate("/")
            })
            .catch(() => alert("Email / password salah"))
    }

    // Input Login
    const inputLogin = (e) => {
        let newLogin = { ...userLogin }
        newLogin[e.target.name] = e.target.value
        setUserLogin(newLogin)
    }

    return (
        <>
            <Row style={{ backgroundImage: `url(${backImage})`, minHeight: "31rem" }}>
                <Col xl={6}>
                    <img
                        src={heroImage}
                        alt="pazarLogo"
                        className="d-block mx-auto"
                        style={{ marginTop: "4rem" }}
                    />
                </Col>
                <Col xl={6} className="mt-4">
                    <Forms
                        handleRegister={handleRegister}
                        inputRegister={inputRegister}
                        user={user}
                        handleLogin={handleLogin}
                        inputLogin={inputLogin}
                        userLogin={userLogin}
                        login={login}
                        setLogin={setLogin}
                    />
                </Col>
            </Row>
        </>
    )
}

export default Landing