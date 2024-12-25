import React from 'react'
import "./nav.css";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
function Nav() {
  return (
    <div className='nav1'>
          <div >
        <Link style={{textDecoration:"none",fontSize:"5vh",fontWeight:"600"}} className='link' to={"/"}>Crypto</Link>
          </div>
          <div className='linksNav'>
          <Link to={"/"} className='link' style={{textDecoration:"none",fontSize:"3vh",fontWeight:"600"}}>Home page</Link>
          <Link className='link' style={{textDecoration:"none",paddingLeft:"5vw",fontSize:"3vh",fontWeight:"600"}}to={"/cripto"}>Products</Link>
          </div>
          <div>
          <Button type="primary" shape="round" style={{height:"5vh"}}>Login</Button>
          </div>
    </div>
  )
}

export default Nav
