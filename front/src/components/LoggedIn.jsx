import React, { useState } from "react"
import { Badge, Dropdown, Space } from 'antd';
import { AiOutlineDown } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import style from "./LoggedIn.module.css";
import userIcon from '../assets/img/Ellipse 36.png';
import ChatDropDown from "../ChatPage/ChatDropDown";
import { Link } from "react-router-dom";

function LoggedIn() {
  const [clickClose, setClickClose] = useState(false);

  return (
    <div>
      <Link to="/chat"> <Badge count={6} size="small" color="red">
        <span className={style.message}>쪽지</span>
      </Badge></Link>
     

      {/* 원래는 강아지 인스타에 있는 거지만, 임시로 여기에 드롭다운 메뉴 한 것 */}
      <Dropdown 
        overlay={<ChatDropDown/>}
        placement="bottomLeft" 
        trigger={['click']}
      >
        <Space style={{ verticalAlign: "middle" }}>
          <FiMail style={{ marginLeft: '24px'}}  />
        </Space>
      </Dropdown>
      


      <span style={{ margin: "0 24px", fontWeight: "bold" }}>|</span>

      <Dropdown overlay={Content} placement="bottomLeft">
        <Space style={{ verticalAlign: "middle" }}>
          <span>000님</span>
          <AiOutlineDown />
        </Space>
      </Dropdown>
    </div>
  )
};

const Content = () => {
  return (
    <div className={style.dropdownWrap}>
      <div className={style.userInfoWrap}>
        <div className={style.userIcon}>
          <img src={userIcon} style={{ width: "48px" }} />
        </div>
        <div className={style.userInfo}>
          <p style={{ fontSize: "16px", color: "black", fontWeight: "bold" }}>사용자 이름</p>
          <p style={{ fontSize: "12px", color: "#969696" }}>회원 등급 (개인, 단체)</p>
        </div>
      </div>
      <div className={style.tabWrap}>
        <p>마이페이지</p>
        <p>설정</p>
        <p>로그아웃</p>
      </div>
    </div>
  )
}

export default LoggedIn