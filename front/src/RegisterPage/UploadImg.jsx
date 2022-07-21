// firebase 사용한 image upload component
import React, { useRef, useState } from 'react';
import style from './Register.module.css';
import { Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { BsImage } from 'react-icons/bs';

function UploadImg({ uploadImage }) {
  const [preview, setPreivew] = useState(""); // 미리보기 url
  const [loading, setLoading] = useState(false);

  const fileInput = useRef();

  const uploadButton = () => {
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  }

  const onFileChange = (e) => {
    const theFile = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result }
      } = finishedEvent;
      setPreivew(result);
      uploadImage(result.toString()); // 엄청 긴 이미지 url 넘겨줌
    }
    reader.readAsDataURL(theFile);
  }

  const onFileDelete = () => {
    setPreivew("");
    fileInput.current.value = "";
  }

  return (
    <div>
      <div className={style.imgWrap}>
        {preview ? (
          <>
            <div style={{opacity: 1}}>
              <img src={preview} />
            </div>
          </>
        ) : (
          <>
            <BsImage size={64} color="#969696" />
            <span style={{color: "#969696", fontWeight: "bold"}}>사진 선택하기</span>
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              ref={fileInput}
            />
          </>
        )}
      </div>
      {preview && <button onClick={onFileDelete}>Clear</button>}
      
    </div>
  );
}

export default UploadImg;