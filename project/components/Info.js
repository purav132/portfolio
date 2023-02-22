import React from "react";

export default function Info() {
  return (
    <div className="info">
      <img className="user-pic" src="./images/profilePic.jpg" />
      <h3 className="user-name">Purav Kansara</h3>
      <h4 className="user-job"> Frontend Developer </h4>
      <p>
        <a
          className="user-website"
          href="https://www.linkedin.com/in/purav-kansara-90aa431b0"
          target="_blank"
        >
          puravkansara.com
        </a>
      </p>
      <div className="buttons">
        <button className="fa-solid fa-envelope"> Email</button>
        <button className="fa-brands fa-linkedin"> LinkedIn</button>
      </div>
    </div>
  );
}
