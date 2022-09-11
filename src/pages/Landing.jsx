// Import Library
import React from "react";
import { Col, Row } from "react-bootstrap";
// Import Components
import Forms from "../components/Forms";
import backImage from "../assets/backLanding.png"
import heroImage from "../assets/hero.png"

const Landing = () => {
    return (
        <>
            <Row style={{ backgroundImage: `url(${backImage})`, minHeight: "31rem" }}>
                <Col xl={6}>
                    <img 
                    src={heroImage}
                    alt="pazarLogo"
                    className="d-block mx-auto"
                    style={{marginTop : "4rem"}}
                    />
                </Col>
                <Col xl={6} className="mt-4">
                    <Forms />
                </Col>
            </Row>
        </>
    )
}

export default Landing