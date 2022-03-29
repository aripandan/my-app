import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
const pages = [{ name: "page1" }, { name: "page2" }];

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Stuck</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/about">
                        <a>About</a>
                    </Nav.Link>
                            {pages.map((page) => {
                                return (
                                    <li key={page.name}>
                                        <Nav.Link href={`/pages/${page.name}`}>{page.name}</Nav.Link>
                                    </li>
                                );
                            })}

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                {pages.map((page) => {
                    return (
                        <li key={page.name}>
                            <Link href={`/pages/${page.name}`} >
                                <a>{page.name}</a>
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>

            </ul>
        </div >
    );
}
