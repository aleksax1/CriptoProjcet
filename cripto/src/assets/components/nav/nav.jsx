import { Button } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import{HeartFilled} from "@ant-design/icons";
function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const handeleChanges = (link) => {
    setActiveLink(link);
  };
  const location = useLocation();
  console.log(activeLink);
  console.log(location);
  return (
    <div className="nav1">
      <div>
        <Link
          style={{
            textDecoration: "none",
            fontSize: "5vh",
            fontWeight: "600",
            color: "rgb(64 150 255)",
          }}
          to={"/"}
          className="link"
        >
          Crypto
        </Link>
      </div>
      <div className="linksNav">
        <div>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontSize: "3vh",
              fontWeight: "600",
            }}
            className={`link ${location.pathname === "/cripto" ? "active" : ""}`}
          >
            Home page
          </Link>
        </div>
      <div>
          <Link
            className={`link ${location.pathname === "/cripto" ? "active" : ""}`}
            style={{
              textDecoration: "none",
              fontSize: "3vh",
              fontWeight: "600",
            }}
            to={"/cripto"}
          >
            Products
          </Link>
        </div>
      </div>
      
      <div style={{display:"flex" ,gap:"10px"}}>
        <Button type="primary" shape="round" style={{ height: "5vh" }} icon={<HeartFilled />}>
          Favorites
        </Button>
        <Button type="primary" shape="round" style={{ height: "5vh" }}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Nav;
