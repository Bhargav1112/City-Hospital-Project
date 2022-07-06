import React from "react";
import { NavLink, Route } from "react-router-dom";
import BookApointment from "../Apointment/BookApointment";
import ListApointment from "../Apointment/ListApointment";

function Apointments(props) {
    return (
        <main id="make_appointment">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Manage Appointments</h2>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <NavLink
                                to={`/apointment/book`}
                                className="appointment-btn"
                            >
                                Book Apointment
                            </NavLink>
                        </div>
                        <div className="col-6 text-center">
                            <NavLink
                                to="/apointment/list"
                                className="appointment-btn"
                            >
                                Apointments
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Route path="/apointment/book">
                    <BookApointment />
                </Route>
                <Route path="/apointment/list">
                    <ListApointment />
                </Route>
            </section>
        </main>
    );
}

export default Apointments;
