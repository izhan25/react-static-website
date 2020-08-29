import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ title, description, route, boxclassName, boxIcon }) {
  return (
    <div
      className="col-md-6 col-lg-3 d-flex align-items-stretch"
      data-aos="fade-up"
      style={{ cursor: "pointer", flex: "0 0 auto" }}
    >
      <div className={`icon-box ${boxclassName}`}>
        <div className="icon">
          <i className={boxIcon}></i>
        </div>
        <h4 className="title">
          <Link to={route}>{title}</Link>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
