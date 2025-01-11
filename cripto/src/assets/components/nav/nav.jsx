import { HeartFilled } from "@ant-design/icons";
import { Badge, Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import "./nav.css";
function Nav() {
  const { favorites } = useContext (AppContext);
  const navigate = useNavigate()
  
  return (
    <div className="nav1">
      <div>
        <NavLink
          style={{
            textDecoration: "none",
            fontSize: "5vh",
            fontWeight: "600",
            color: "rgb(64 150 255)",
          }}
          to={"/CriptoProjcet"}
          className="link"
        >
          Crypto
        </NavLink>
      </div>
      <div className="linksNav">
        <div>
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              fontSize: "3vh",
              fontWeight: "600",
            }}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "link"
            }
          >
            Home page
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "link"
            }
            style={{
              textDecoration: "none",
              fontSize: "3vh",
              fontWeight: "600",
            }}
            to={"/cripto"}
          >
            Products
          </NavLink>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <Badge count={favorites.length}>
            <Button
              type="primary"
              shape="round"
              style={{ height: "5vh" }}
              icon={<HeartFilled />}
              onClick={()=>navigate("/favorites")}
            >
              Favorites
            </Button>
          </Badge>
        </div>
        <div>
          <Button type="primary" shape="round" style={{ height: "5vh" }} onClick={()=>navigate("/login")}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
