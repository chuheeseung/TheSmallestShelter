import React from 'react';
import logoImage from '../assets/img/Group8700.png';
import personalImage from '../assets/img/signup_person.png';
import groupImage from '../assets/img/signup_group.png';
import { Link } from 'react-router-dom';

function SelectType() {
    return (
        <>
        <div>
            <div>
                <img 
                    src={logoImage}
                    alt={logoImage}
                />
                <div>회원가입 유형 선택</div>
            </div>
            <div>
                <div>
                    <div>개인(입양자) 회원</div>
                    <div>
                        <img src={personalImage} alt={personalImage} />
                        <button>개인 회원가입</button>
                    </div>
                </div>
                <div>
                    <div>기관/단체 회원</div>
                    <div>
                        <img src={groupImage} alt={groupImage} />
                        <button>기관/단체 회원가입</button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default SelectType;