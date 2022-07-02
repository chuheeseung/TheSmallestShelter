import React, { useState } from 'react';
import style from './Register.module.css';
import UploadImg from './UploadImg';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Typography } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
let index = 0;


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(0);
    const [species, setSpecies] = useState("");
    const [items, setItems] = useState(["홍염", "파보", "코로나", "슬개골",]);
    const [diseaseName, setDiseaseName] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = items.filter((o) => !selectedItems.includes(o));
    const [health, setHealth] = useState("");
    const [manager, setManager] = useState(1);
    const [checkValArr, setCheckValArr] = useState([]);
    const managerArr = [{ name: "임보 단체", value: 1 }, { name: "개인", value: 2 }];
    const checkArr = ["사회화", "분리불안", "배변 훈련", "짖음", "입질"];
    const checkObj = [
        { name: "완벽해요", value: 1 },
        { name: "연습중이에요", value: 2 },
        { name: "아직 부족해요", value: 3 }
    ]
    const [imgList, setImgList] = useState("");
    const [file, setFile] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const onChangeGender = (valueObj) => {
        let value = parseInt(valueObj.value);
        setGender(value);
    }

    const onChangeSpecies = (valueObj) => {
        let value = valueObj.value;
        setSpecies(value);
    }

    const onChangeManager = (e) => {
        setManager(e.target.value);
    };

    const onChangeCheck = (e) => {
        const { id, value } = e.target;
        const result = { [id]: value };
        console.log(result)

        setCheckValArr([...checkValArr, result]);
        console.log(checkValArr)
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await axios({
            headers: {
                "Content-Type": "multipart/form-data",
            },
            method: 'post',
            url: 'http://hana-umc.shop:8080/new',
            data: {
                name: name,
                age: age,
                organization: gender,
                socialization: checkValArr[0][0],
                anxiety: checkValArr[1][1],
                train: checkValArr[2][2],
                bark: checkValArr[3][3],
                bite: checkValArr[3][3],
                illness: selectedItems,
                mainImg: imgUrl,
                species: species,
            }
        })
        if (res.data) {
            alert('Added Data');
        }
        alert("정보가 등록되었습니다.");
        navigate('/listview');
    }

    const onNameChange = (event) => {
        setDiseaseName(event.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, diseaseName || `New item ${index++}`]);
        setDiseaseName('');
    };

    const ImgUploadFunc = (x) => {
        setImgList(JSON.stringify(x));
    };

    const onChangeImg = async (e) => {
        e.preventDefault();

        if (e.target.files) {
            // const uploadFile = e.target.files[0]
            setFile(e.target.files[0]);
        }
    }
    return (
        <div className={style.container}>
            <form onSubmit={onSubmit}>
                <div className={style.infoWrap}>
                    <div className={style.photo}>
                        {imgUrl &&
                        <img src={imgUrl} style={{marginBottom: "8px", width: "200px"}}/>
                        }
                        <p>
                            <label htmlFor="urlImg">이미지</label>
                            <input
                                type="text"
                                id="urlImg"
                                placeholder="이미지 주소를 입력하세요"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)} /></p>
                        {/* <input
                            type="file"
                            accept="image/*"
                            multiple="multiple"
                            required
                            onChange={onChangeImg} /> */}
                    </div>
                    <div className={style.info}>
                        <p>
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="이름을 입력하세요"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <Select
                                labelInValue
                                defaultValue={{ value: "0", label: "성별" }}
                                style={{
                                    marginLeft: "20px",
                                    width: "80px",
                                }}
                                onChange={onChangeGender}
                            >
                                <Option value="1">암컷</Option>
                                <Option value="2">수컷</Option>
                                <Option value="3">중성</Option>
                            </Select>
                            <Select
                                labelInValue
                                defaultValue={{ value: "0", label: "종류" }}
                                style={{
                                    marginLeft: "20px",
                                    width: "120px",
                                }}
                                onChange={onChangeSpecies}
                            >
                                <Option value="강아지">강아지</Option>
                                <Option value="고양이">고양이</Option>
                            </Select>
                        </p>
                        <p>
                            <label htmlFor="age">나이</label>
                            <input
                                type="number"
                                id="age"
                                placeholder="나이를 입력하세요"
                                value={age}
                                onChange={(e) => setAge(e.target.value)} />
                        </p>
                        <p>
                            <span>질병</span>
                            <Select
                                mode="multiple"
                                value={selectedItems}
                                onChange={setSelectedItems}
                                style={{
                                    textAlign: "center",
                                    width: '180px',
                                }}
                                placeholder="질병을 선택하세요"
                                dropdownRender={(menu) => (
                                    <>
                                        {menu}
                                        <Divider
                                            style={{
                                                margin: '8px 0',
                                            }}
                                        />
                                        <Space
                                            align="center"
                                            style={{
                                                padding: '0 8px 4px',
                                            }}
                                        >
                                            <Input placeholder="직접 입력" value={diseaseName} onChange={onNameChange} />
                                            <Typography.Link
                                                onClick={addItem}
                                                style={{
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                <PlusOutlined /> Add item
                                            </Typography.Link>
                                        </Space>
                                    </>
                                )}
                            >
                                {filteredOptions.map((item) => (
                                    <Select.Option key={item} value={item}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
                        </p>
                        {/* <p className={style.textarea}>
                            <label htmlFor="health">건강검진</label>
                            <textarea
                                id="health"
                                placeholder="건강검진 결과를 입력하세요"
                                value={health}
                                onChange={(e) => setHealth(e.target.value)} />
                        </p> */}
                        <p>
                            <label htmlFor="manager">관리자</label>
                            {
                                managerArr.map((manager) => (
                                    <label>
                                        <input
                                            id={manager}
                                            type='radio'
                                            name={manager}
                                            value={manager.value}
                                            onChange={onChangeManager}
                                        />{manager.name} </label>
                                ))
                            }
                        </p>
                        {
                            checkArr.map((item, idx) => (
                                <p className={style.checkList}>
                                    <span>{item}</span>
                                    {
                                        checkObj.map((check) => (
                                            <label>
                                                <input
                                                    id={idx}
                                                    type='radio'
                                                    name={idx}
                                                    value={check.value}
                                                    onChange={onChangeCheck}
                                                />{check.name} </label>
                                        ))
                                    }
                                </p>

                            ))
                        }

                    </div>
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Register;