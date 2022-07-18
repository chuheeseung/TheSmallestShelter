import React from 'react';
import style from "./Nav.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/Group 8700.svg';

function Nav() {
  const navigate = useNavigate();
  return (
    <div className={style.headerWrap}>
      <div className={style.headerLogo}>
        <LogoIcon style={{ width: "32px", margin: "0 8px 0 24px" }} onClick={() => navigate('/listview')}/>
        <h1 style={{ fontSize: "20px", marginRight: "24px", fontWeight: "normal" }} onClick={() => navigate('/listview')}>세작소</h1>

        <Link to='/register' style={{ textDecoration: "none", color: "inherit" }}><p style={{ fontSize: "14px" }}>등록하기</p></Link>
      </div>

      <div className={style.headerRight}>
        <p>로그인</p>
        <p style={{ margin: "0 24px" }}>|</p>
        <p>회원가입</p>
      </div>
    </div>
  );
}

export default Nav;