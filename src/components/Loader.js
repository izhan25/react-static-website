import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderLib from "react-loader-spinner";

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: 600 }}
    >
      <LoaderLib
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  );
}

export default Loader;
