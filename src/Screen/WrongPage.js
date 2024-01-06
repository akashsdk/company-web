import React from "react";
import "./WrongPage.css";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function WrongPage() {
  return (
    <div className="WrongPage-Body">
      <Result status="500" />
      <p>Sorry, We could not find the page! Something went wrong.</p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button type="primary" danger>
          Back Home
        </Button>
      </Link>
    </div>
  );
}
