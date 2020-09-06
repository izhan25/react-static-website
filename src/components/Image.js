import React, { useState } from "react";
import Loader from "react-loader-spinner";

function Image(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div
          className="h-100 w-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#c7c7c7" }}
        >
          <Loader type="TailSpin" color="white" />
        </div>
      )}
      <img
        {...props}
        onLoad={() => setLoaded(true)}
        style={loaded ? {} : { display: "none" }}
        alt={props.alt}
      />
    </>
  );
}

export default Image;
