import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { message, Upload, Progress } from 'antd';
import axios from 'axios';
import { useState } from 'react';

function UploadImg({ ImgUploadFunc }) {
    const [defaultFileList, setDefaultFileList] = useState([]);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const uploadImage = async options => {
        const { onSuccess, onError, file, onProgress } = options;
    
        const fmData = new FormData();
        const config = {
          headers: { "content-type": "multipart/form-data" },
          onUploadProgress: event => {
            const percent = Math.floor((event.loaded / event.total) * 100);
            setProgress(percent);
            if (percent === 100) {
              setTimeout(() => setProgress(0), 1000);
            }
            onProgress({ percent: (event.loaded / event.total) * 100 });
          }
        };
        fmData.append("image", file);
     };
    
      const handleOnChange = ({ file, fileList, event }) => {
        setDefaultFileList(fileList);
        ImgUploadFunc(fileList)

      };

    const uploadButton = (
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
    );

    return (
        <Upload
        accept="image/*"
        customRequest={uploadImage}
        onChange={handleOnChange}
        listType="picture-card"
        defaultFileList={defaultFileList}
        className="image-upload-grid"
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                    }}
                />
            ) : (
                uploadButton
            )}
        </Upload>
    );
};

export default UploadImg;