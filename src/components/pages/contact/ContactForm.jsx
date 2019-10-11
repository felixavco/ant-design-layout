import React, { useState } from "react";

const ContactForm = () => {

  const submitHandler = (e) => {
      e.preventDefault();
      console.log("Form submitted!!")
  };

  return (
    <section>
      <div className="row">
        <div className="col-12 col-md-6 mx-auto my-3 p-2">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
