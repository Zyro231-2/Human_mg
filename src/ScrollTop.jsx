/** @format */

import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollTop = () => {
  const button = {
    height: "40px",
    width: "40px",
    background: "#fff",
    borderRadius: "2px",
    fontSize: "38px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    textAlign: "center",
    display: "none",
    border: "1px solid rgba(42, 42, 43, 0.24)",
    boxShadow: "rgba(42, 42, 43, 0.24) 0px 3px 8px",
  };
  const handleScrollToTop = () => {
    // Add your logic to scroll to the top of the page here
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", () => {
    let button = document.querySelector(".button");
    if (window.pageYOffset > 500){
        setTimeout(() => {
        button.style.display = "block";
      }, 800);
    }
    else{
        setTimeout(() => {
          button.style.display = "none";
        }, 800);
    }
  });
  return (
    <button
      onClick={handleScrollToTop}
      style={button} className="button">
      <RiArrowUpSLine />
    </button>
  );
};

export default ScrollTop;
