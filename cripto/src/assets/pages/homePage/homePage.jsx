import React from "react";
import baner from "./baner.png";
import "./homePage.css";
import { Button, Flex, Input } from "antd";
function HomePage() {

  const { TextArea } = Input;


  return (
    <div>
      <div className="baner">
        <img src={baner} alt="Baner" className="" />
      </div>
      <div className="conteiner">
          <h3>CONTENT SOON</h3>
      </div>
      <div className="newsLetter">
        <h3>News letter</h3>
        <p>"Stay updated! Subscribe to our newsletter for the latest news, updates, and exclusive offers."</p>
        <Flex vertical gap={32}>
  
    <TextArea
      showCount
      maxLength={100}
      placeholder="disable resize"
      style={{ height: 120, resize: 'none' }}
    />
        </Flex>
        <Button type="primary" className="btn">
            SUBMIT
          </Button>
        </div>
    </div>
  );
}
export default HomePage;
