import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
function Nav() {
  return (
    <div className='nav1'>
          <div>
          <h2>Crypto</h2>
          </div>
          <div className='linksNav'>
          <Link to={"/"} style={{textDecoration:"none",color:"rgb(64 150 255)",fontSize:"3vh",fontWeight:"600"}}>Home page</Link>
          <Link style={{textDecoration:"none",color:"rgb(64 150 255)",paddingLeft:"5vw",fontSize:"3vh",fontWeight:"600"}}to={"/cripto"}>Products</Link>
          </div>
          <div>
          <Button type="primary" style={{height:"5vh"}}>Login</Button>
          </div>
    </div>
  )
}

export default Nav
