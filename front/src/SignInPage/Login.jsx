import React, { useState } from 'react';
import { useEffect } from 'react';
import logoImage from '../assets/Group8700.png';
import style from './Login.module.css';

const User = {
    email: 'test@gmail.com',
    pw: '@test1234'
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = 
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        
        if(regex.test(email)) {
            setEmailValid(true);
        }
        else {
            setEmailValid(false);
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(regex.test(password)) {
            setPwValid(true);
        }
        else {
            setPwValid(false);
        }
    };

    const onClickConfirmButton = () => {
        if(email === User.email && password === User.pw) {
            alert("로그인에 성공했습니다!");
        }
        else {
            alert("등록되지 않은 회원입니다.");
        }
    };

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    return (
        <>
            <div className={style.contentWrap}>
                <img
                    className={style.logoImage}
                    src={logoImage}
                    alt={logoImage}
                />
                <div className={style.inputTitle}>이메일을 입력해주세요</div>
                <div className={style.inputWrap}>
                    <input 
                        type='text'
                        className={style.input}
                        palceholder='test@gmail.com'
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className={style.errorMessageWrap}>
                    {
                        !emailValid && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요</div>
                        )
                    }
                </div>
                <div className={style.inputTitle}>비빌먼호를 입력해주세요</div>
                <div className={style.inputWrap}>
                    <input 
                        type='password'
                        className={style.input}
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <div className={style.errorMessageWrap}>
                    {
                        !pwValid && password.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
                        )
                    }
                </div>
            </div>
            <div>
                <button 
                    disabled={notAllow} 
                    className={style.bottomButton} 
                    onClick={onClickConfirmButton}
                >
                    로그인
                </button>
            </div>
        </>
    )
}

export default Login;