import React, { useState } from 'react'
import styled from 'styled-components';
import Modal from "./Modal";
import ReactModal from 'react-modal';

// import MyModal from "./MyModal";
// import useModals from "./useModals.js";
ReactModal.setAppElement('#root');


export default function Posts({ imgUrl, name, info }) {

    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
      // 여기서 열어준다
        setOpen(true);
    };

    const handleModalSubmit = () => {
        // 모달1 비지니스 로직
        setOpen(false);
    }

    const handleModalCancel = () => setOpen(false);

    return (
       <>
            <PhotoContainer onClick={handleClick}>
                <img src={imgUrl} alt="대표 사진" style={{width:"300px", height: "300px",margin: "10px", borderRadius:"15px", objectFit: "cover"}}/>
                <div className="photo-morahazi" >
                    <div className="photo-name">{name}</div>
                    <div className="photo-info" >
                        <span>{info}</span>
                    </div>
                </div>
                    
            </PhotoContainer>
            <Modal isOpen={isOpen} onSubmit={handleModalSubmit} onCancel={handleModalCancel} 
                imgUrl = {imgUrl}
                name = {name}
                info = {info}
            
            />
        </>



    );
}

const PhotoContainer=styled.div`

    margin: 16px;
    border-radius: 15px;
`;