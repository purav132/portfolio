import React from "react";
import { Button } from "antd";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footer">
      <Button icon={<TwitterOutlined />}></Button>
      <Button icon={<FacebookOutlined />}></Button>
      <Button icon={<InstagramOutlined />}></Button>
      <Button icon={<GithubOutlined />}></Button>
    </div>
  );
}
