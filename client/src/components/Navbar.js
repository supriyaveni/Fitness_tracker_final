import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import fitnessLogo from "../images/fitnesslogo.png";

import Auth from "../utils/auth";

const NavFunction = () => {
    const isLoggedIn = Auth.loggedIn();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">

            {isLoggedIn ? (
                <>
                    <Navbar.Brand as={Link} to="/" className="navBrand d-flex align-items-center justify-content-start">
                        {/* <!--img
                            src={fitnessLogo}
                            alt="Fitness Logo"
                            className="fitnessLogo"
                        /--> */}
                        Fitness Tracker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="nav-collapse">

                        <Nav className="navLinks">
                            <Nav.Link as={Link} to="/">
                                Profile
                            </Nav.Link>
                            <Nav.Link as={Link} to="/history">
                                History
                            </Nav.Link>
                            {/* <Nav.Link as={Link} to="/donate">
                                Donate
                            </Nav.Link> */}
                            <Nav.Link onClick={Auth.logout}>Sign Out
                            </Nav.Link>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </>
            ) : (
                <>
                    <Navbar.Brand as={Link} to="/" className="navBrand d-flex align-items-center">
                        <img
                            src={fitnessLogo}
                            alt="Fitness Logo"
                            className="fitnessLogo"
                        />
                        Fitness Tracker
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="nav-collapse">

                        <Nav className="navLinks">
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/signup">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </>
            )}
        </Navbar>
    );
};

export default NavFunction;