import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useScrollToTop from "../utills/useScrollToTop";

function Container({ children, transparentHeader, page }) {
  useScrollToTop();

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

  }, []);

  return (
    <>
      <Header transparent={transparentHeader} />
      {children}
      <Footer />
    </>
  );
}

export default Container;
