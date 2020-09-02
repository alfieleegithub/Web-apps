import React from "react";
import { useFormik } from 'formik';
import MainContainer from './MainContainer';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate,
    onSubmit: values => {
      fetch(window.location.href.replace("contact", "send"), {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }).then(response =>
        response.json()
      ).then(response => {
        if (response.status === "successful") {
          alert("Message has been sent successfuly");
        } else {
          alert("Failed to send message");
        }
      })
    },
  });
  return (
    <MainContainer >
      <main className="bg-contact container-fluid">
        <div className="row justify-content-center">
          <div className="wrap col-8">
            <h1 className="subtitle text-center">CONTACT ME</h1>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="bg-input form-control"
                  placeholder="Your name"
                  maxLength="30"
                />
                {formik.touched.name && formik.errors.name ? (<div className="color-error">{formik.errors.name}</div>) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-input form-control"
                  placeholder="Email address"
                />
                <small id="emailHelp" className="form-text text-muted">You will get an auto-reply email to confirm that I have been notified.</small>
                {formik.touched.email && formik.errors.email ? (<div className="color-error">{formik.errors.email}</div>) : null}
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="bg-input form-control"
                  placeholder="Maximum 300 words"
                  maxLength="300"
                  rows="3"
                />
                {formik.touched.message && formik.errors.message ? (<div className="color-error">{formik.errors.message}</div>) : null}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </main>
    </MainContainer >
  );
};

export default Contact;