import React from 'react';
import { FaReact } from 'react-icons/fa';

export const AboutPage: React.FC = () => (
  <div className="container d-flex flex-column align-items-center">
    <h2 className="text-center mb-4">About</h2>
    <div>
      <p>Test application by Stepanov Igor for &quot;Natlex&quot;</p>
    </div>
    <div className="text-center ">
      <FaReact size={150} />
    </div>
  </div>
);
