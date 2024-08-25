import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme_pattern" width="35%" />
      </div>
      <div className="mywork-container">
        <div className="mywork-data">
          {mywork_data.map((work, index) => {
            return <img src={work.w_img} alt="w_img" key={index} />;
          })}
        </div>
        <a href="https://github.com/Kris1511?tab=repositories" target="_blank" rel="noopener noreferrer" className="link">
          <div className="mywork-showmore">
            <p>Share more</p>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default MyWork;
