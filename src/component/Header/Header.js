import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
    const navClickHandler = (e) => {
        const click = e.target.closest(".navbar-links");
        const links = document.querySelectorAll(".navbar-links");
        if (!click) return;

        links.forEach((el) => {
            el.querySelector(".nav-link").classList.remove("active");
        });

        click.querySelector(".nav-link").classList.add("active");
    };

    return (
        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" />{" "}
                        <a href="mailto:contact@example.com">
                            cityhospital@example.com
                        </a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter">
                            <i className="bi bi-twitter" />
                        </a>
                        <a href="#" className="facebook">
                            <i className="bi bi-facebook" />
                        </a>
                        <a href="#" className="instagram">
                            <i className="bi bi-instagram" />
                        </a>
                        <a href="#" className="linkedin">
                            <i className="bi bi-linkedin" />
                        </a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1>
                            <br />
                            <h2 className="logo-tiny-text me-auto">
                                Multispeciality Hospital
                            </h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul onClick={navClickHandler}>
                            <li className="navbar-links">
                                <NavLink className="nav-link scrollto" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    className="nav-link scrollto"
                                    to="/departments"
                                >
                                    Departments
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    className="nav-link scrollto"
                                    to="/doctors"
                                >
                                    Doctors
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    className="nav-link scrollto "
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    className="nav-link scrollto"
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink
                        to="/apointment"
                        className="appointment-btn scrollto"
                    >
                        <span className="d-none d-md-inline">Make an</span>
                        Appointment
                    </NavLink>
                    <NavLink to="/login" className="appointment-btn scrollto">
                        <span className="d-none d-md-inline">
                            Login/ Signup
                        </span>
                    </NavLink>
                </div>
            </header>
        </div>
    );
}

export default Header;
