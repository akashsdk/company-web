import React from "react";
import "./WrongPage.css";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function WrongPage() {
  return (
    <div className="WrongPage-Body">
      <Result status="500" />
      <p className="WrongPage-Text">404! 'This page does not exist'</p>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button type="primary" danger>
          Back Home
        </Button>
      </Link>
    </div>
  );
}
