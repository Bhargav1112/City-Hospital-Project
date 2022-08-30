import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeProvider";
import { useDispatch, useSelector } from 'react-redux'
import Alert from "../alert/Alert";
import { signoutAction } from "../../redux/action/authAction";

function Header(props) {
    const themeCtx = useContext(ThemeContext);
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleThemeToggle = () => {
        themeCtx.toggleTheme(themeCtx.theme);
    };

    const logoutHandler = () => {
        dispatch(signoutAction())
    }
    return (
        <div className={`main-header`}>
            <Alert />
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
            <header id="header" className={`fixed-top `}>
                <div className={`container d-flex align-items-center ${themeCtx.theme}`}>
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
                        <ul>
                            <li className="navbar-links">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link scrollto"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link scrollto"
                                    to="/departments"
                                >
                                    Departments
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link scrollto"
                                    to="/doctors"
                                >
                                    Doctors
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link scrollto "
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    activeClassName="active"
                                    className="nav-link scrollto "
                                    to="/medicine"
                                >
                                    Medicines
                                </NavLink>
                            </li>
                            <li className="navbar-links">
                                <NavLink
                                    activeClassName="active"
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
                    {!auth.user ?
                        <NavLink to="/login" className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">
                                Login/ Signup
                            </span>
                        </NavLink>
                        :
                        <NavLink to="/login" className="appointment-btn scrollto" onClick={logoutHandler}>
                            <span className="d-none d-md-inline">
                                Logout
                            </span>
                        </NavLink>
                    }
                    <button className="theme appointment-btn scrollto" onClick={handleThemeToggle}>
                        Toggle theme
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
