import React from "react";
import { FaReact } from "react-icons/fa";
import "../index.scss";

const About: React.FC = () => {
  return (
    <div>
      <h2 className="text-center mb-4">About</h2>
      <p className="h-100 d-flex align-items-center justify-content-center">
        Test application by Stepanov Igor for "Natlex"
      </p>
      <div className="text-center ">
        <FaReact size={150} />
      </div>
    </div>
  );
};

export default About;
