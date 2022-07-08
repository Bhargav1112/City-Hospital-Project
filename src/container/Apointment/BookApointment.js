import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useHistory, useLocation } from "react-router-dom";

function BookApointment(props) {
  const history = useHistory();

  useEffect(() => {
    if (history.location.state?.isEditing) {
      const localData = JSON.parse(localStorage.getItem("apt"));
      const existingDataIndex = localData.findIndex(
        (apt) => apt.id === history.location.state?.id
      );
      formik.setValues(localData[existingDataIndex]);
    } else {
      formik.resetForm();
    }
    props.onData(formik);
  }, []);

  const apointmentSubmitHandler = (values) => {
    const localData = JSON.parse(localStorage.getItem("apt"));
    const id = Math.floor(Math.random() * 1000 + 1);
    const data = {
      id,
      ...values,
    };
    if (!localData) {
      localStorage.setItem("apt", JSON.stringify([data]));
    } else {
      localData.push(data);
      localStorage.setItem("apt", JSON.stringify(localData));
    }
    formik.resetForm();
    history.push("/apointment/list");
  };

  const updateHandler = (values) => {
    const localData = JSON.parse(localStorage.getItem("apt"));
    const existingDataIndex = localData.findIndex(
      (apt) => apt.id === history.location.state.id
    );
    localData[existingDataIndex] = { ...values };
    localStorage.setItem("apt", JSON.stringify(localData));
    history.replace("/apointment/list");
    formik.resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Please Enter Valid Email.").required("Required"),
    phone: yup.number().required("Required"),
    date: yup.string().required("Required"),
    select: yup.string().required("Required"),
    message: yup
      .string()
      .max(50, "Maximum 50 charecters allowed")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      select: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: history.location.state?.isEditing
      ? updateHandler
      : apointmentSubmitHandler,
  });
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    formik;

  return (
    <div className="container">
      <h1 className="text-center my-5">Book Apointment</h1>
      <form
        method="post"
        role="form"
        className="php-email-form"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-md-4 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <p className="text-danger">{errors.name}</p>
            )}
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="text-danger">{errors.email}</p>
            )}
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input
              type="tel"
              className="form-control"
              name="phone"
              id="phone"
              placeholder="Your Phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <p className="text-danger">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 form-group mt-3">
            <input
              type="date"
              name="date"
              className="form-control datepicker"
              id="date"
              placeholder="Appointment Date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            {errors.date && touched.date && (
              <p className="text-danger">{errors.date}</p>
            )}
          </div>
          <div className="col-md-4 form-group mt-3">
            <select
              name="select"
              id="department"
              className="form-select"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.select}
            >
              <option value="">Select Department</option>
              <option value="Department 1">Department 1</option>
              <option value="Department 2">Department 2</option>
              <option value="Department 3">Department 3</option>
            </select>
            {errors.select && touched.select && (
              <p className="text-danger">{errors.select}</p>
            )}
          </div>
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message (Optional)"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          {errors.message && touched.message && (
            <p className="text-danger">{errors.message}</p>
          )}
        </div>
        <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your appointment request has been sent successfully. Thank you!
          </div>
        </div>
        <div className="text-center">
          <button type="submit">
            {history.location.state?.isEditing
              ? "Update Apointment"
              : "Make an Apointment"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookApointment;
