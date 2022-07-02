import React from 'react';
import style from "./Nav.module.css";
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <nav className={style.navigation}>
            <div className={style.navLeft}>
                <h1 className={style.logo}>세작소</h1>
                <Link to="/register" style={{textDecoration: "none", color: "inherit"}}>
                    <span className={style.register}>등록하기</span></Link>
            </div>
            <div className={style.navRight}>
                <ul>
                    <li>로그인</li>
                    <li>회원가입</li>
                    <li>마이페이지</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;