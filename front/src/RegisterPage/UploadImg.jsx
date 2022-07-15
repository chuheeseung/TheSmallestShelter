// firebase 사용한 image upload component
import React, { useRef, useState } from 'react';

function UploadImg({ uploadImage }) {
  const [preview, setPreivew] = useState(""); // 미리보기 url
  const fileInput = useRef();

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
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInput}
      />
      {preview && (
        <>
          <div>
            <img src={preview} width="300px" />
          </div>
          <button onClick={onFileDelete}>Clear</button>
        </>
      )}
    </div>
  );
}

export default UploadImg;