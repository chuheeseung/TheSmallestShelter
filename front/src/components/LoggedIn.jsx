import React from "react"
import { Badge, Dropdown, Space } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';
import style from "./LoggedIn.module.css";
import userIcon from '../assets/Ellipse 36.png';

function LoggedIn() {
  return (
    <div>
      <Badge count={6} size="small" color="red">
        <span className="message">쪽지</span>
      </Badge>
     
      <span style={{ margin: "0 24px", fontWeight: "bold" }}>|</span>
      
      <Dropdown overlay={Content} placement="bottomLeft">
        <Space style={{verticalAlign: "middle"}}>
        <span>000님</span>
        <AiOutlineDown/>
        </Space>
      </Dropdown>
    </div>
  )
};

const Content = () => {
    return (
      <div className={style.popupWrap}>
        <div className={style.userInfoWrap}>
          <div className={style.userIcon}>
            <img src={userIcon} style={{width: "48px"}}/>
          </div>
          <div className={style.userInfo}>
            <span style={{fontSize: "16px", color: "black", fontWeight: "bold"}}>사용자 이름</span>
            <span style={{fontSize: "12px", color: "#969696"}}>qwe123 (ID)</span>
          </div>
        </div>
      </div>
    )
}

export default LoggedIn