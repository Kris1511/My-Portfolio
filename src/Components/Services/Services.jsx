import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_data from "../../assets/services_data";

const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My services</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="services-container">
        {Services_data.map((service, index) => {
            return (
                <div className="services-format" key={index}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Services;
