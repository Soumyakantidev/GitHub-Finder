import React from "react";
import loading from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={loading}
        alt="Loading"
      />
    </div>
  );
}

export default Spinner;
