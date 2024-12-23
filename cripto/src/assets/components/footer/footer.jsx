import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
          <div style={{ width: "40%" ,display:"flex",justifyContent:'center'}}>
              <div style={{display:"flex",width:"40%",flexDirection:"column",alignItems:"start",justifyContent:"center",gap:"10px"}}>
              <h2 style={{color: "rgb(64 150 255)"}}>Crypto</h2>
                <p>NASDAQ is a global electronic marketplace for buying and trading securities. It features stocks of technology giants, innovative startups, and industry leaders. We are known for our cutting-edge trading systems and diverse market offerings</p>
              </div>
          </div>
          <div style={{display:'flex',flexDirection:"column",gap:"5px"}}>
              <h3 style={{color: "rgb(35, 81, 137)"}}> Pages</h3>
            <Link to={"/"} style={{textDecoration:'none',  color: "rgb(64 150 255)"}}>Home page</Link>
            <Link to={'/cripto'} style={{textDecoration:'none',  color: "rgb(64 150 255)"}}>Products</Link>
      </div>
          <div style={{display:'flex',flexDirection:"column",gap:"5px"}}>
              <h3 style={{color: "rgb(35, 81, 137)"}}>Policy</h3>
            <Link style={{textDecoration:'none',  color: "rgb(64 150 255)"}}>Privcy Policy</Link>
            <Link style={{textDecoration:'none',  color: "rgb(64 150 255)"}}>Cookie</Link>
            <Link style={{textDecoration:'none',  color: "rgb(64 150 255)"}}>Legal</Link>
      </div>
    </div>
  )
}

export default Footer
