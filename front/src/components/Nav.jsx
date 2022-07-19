import React from 'react';
import style from "./Nav.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Group 8700.svg';
import logo from '../assets/Group 8700.png';
import LoggedIn from './LoggedIn';

function Nav() {
  const navigate = useNavigate();
  return (
    <div className={style.headerWrap}>
      <div className={style.headerLogo}>
        {/* <Link to='/listview'><img src={logo} style={{ width: "32px", margin: "0 8px 0 24px"}}/></Link> */}
        <LogoIcon style={{ width: "32px", margin: "0 16px 0 24px" }} onClick={() => navigate('/listview')} />
        <span style={{ fontSize: "20px", marginRight: "24px", fontWeight: "normal" }} onClick={() => navigate('/listview')}>세작소</span>

        <Link to='/register' style={{ textDecoration: "none", color: "inherit" }}><span style={{ fontSize: "14px" }}>등록하기</span></Link>
      </div>

      <div className={style.headerRight}>
        {/* <NotLoggedIn/> */}
        <LoggedIn/>
      </div>
    </div>
  );
}

const NotLoggedIn = () => {
  return (
    <div>
      <span>로그인</span>
      <span style={{ margin: "0 24px", fontWeight: "bold" }}>|</span>
      <span>회원가입</span>
    </div>
  )
};




export default Nav;