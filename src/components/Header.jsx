import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

// logo
import logo from "../assets/mediater_logo.jpg";

export default function Header() {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className="bg-body-secondary fs-5 fw-bolder"
            variant="dark"
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            height: "30px",
                            width: "30px",
                            margin: "0px 5px 0px 0px",
                        }}
                    /> MEDIATER
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            onClick={() => setExpanded(false)}
                        >
                            Home
                        </Nav.Link>
                        {/* <Nav.Link
                            as={Link}
                            to="/our-work"
                            onClick={() => setExpanded(false)}
                        >
                            Our Work
                        </Nav.Link> */}
                        <Nav.Link
                            as={Link}
                            to="/influencers"
                            onClick={() => setExpanded(false)}
                        >
                            Influencers
                        </Nav.Link>
                        {/* <Nav.Link
                            as={Link}
                            to="/services"
                            onClick={() => setExpanded(false)}
                        >
                            Services
                        </Nav.Link> */}
                        <Nav.Link
                            as={Link}
                            to="https://medium.com/@mediaterofficial"
                            onClick={() => setExpanded(false)}
                            target="_blank"
                        >
                            Blog
                        </Nav.Link>
                        {/* <Nav.Link
                            as={Link}
                            to="/creator-tag"
                            onClick={() => setExpanded(false)}
                        >
                            Creator Tag
                        </Nav.Link> */}
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            onClick={() => setExpanded(false)}
                        >
                            Contact us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
