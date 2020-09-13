import React from "react";
import { Link } from "react-router-dom";

function AppointmentBtn() {
  return (
    <section>
      <div className="row d-flex justify-content-center align-items-center">
        <Link
          to="/contact"
          className="btn btn-primary btn-lg btn-block col-md-3 mx-5"
        >
          Make An Appointment
        </Link>
      </div>
    </section>
  );
}

export default AppointmentBtn;
