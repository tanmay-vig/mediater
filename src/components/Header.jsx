import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                      MEDIATER
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/our-work">Our Work</Nav.Link>
                            <Nav.Link href="#link">Influencers</Nav.Link>
                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Blog</Nav.Link>
                            <Nav.Link href="#link">Creator Tag</Nav.Link>
                            <Nav.Link href="/contact">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
