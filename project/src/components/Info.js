import React from "react";
import profilePic from "../images/profilePic.jpg";
import { Button } from "antd";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";

export default function Info() {
  return (
    <div className="info">
      <img className="user-pic" src={profilePic} alt="user pic" />
      <div className="user-name">Purav Kansara</div>
      <div className="user-job"> Frontend Developer </div>
      <div className="user-website">
        <a href="https://www.linkedin.com/in/purav-kansara-90aa431b0">
          puravkansara.com
        </a>
      </div>
      <div className="info-btns">
        <Button icon={<MailOutlined />}>Email</Button>
        <Button type="primary" icon={<LinkedinOutlined />}>
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
