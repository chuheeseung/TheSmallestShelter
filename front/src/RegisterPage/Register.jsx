import React, { useState } from 'react';
import style from './Register.module.css';
import UploadImg from './UploadImg';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Typography } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { storageService } from './fbase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
const { Option } = Select;
let index = 0;


function Register() {
    const navigate = useNavigate();
    // 이름, 나이, 성별, 종, 질병, 질병 추가 입력, [사회화, 분리불안, 배변훈련, 짖음, 입질], 이미지
    // str, str, int, str, list<String>, object (int), str
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState(0);
    const [species, setSpecies] = useState("");
    const [items, setItems] = useState(["홍역", "파보", "코로나", "슬개골",]);
    const [diseaseName, setDiseaseName] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = items.filter((o) => !selectedItems.includes(o));
    const [checkVal, setCheckVal] = useState([]);
    const checkArr = ["사회화", "분리불안", "배변 훈련", "짖음", "입질"];
    const checkType = [
        { name: "완벽해요", value: 1 },
        { name: "연습중이에요", value: 2 },
        { name: "아직 부족해요", value: 3 }
    ]
    const [image, setImage] = useState("");

    const onChangeCheck = (e) => {
        const { id, value } = e.target;
        let tmp = [];
        tmp = checkVal;
        tmp[id] = Number(value);
        setCheckVal(tmp);
    }

    const uploadImage = (img) => {
        setImage(img);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let imgUrl = "";

        if (image !== "") {
            const fileRef = ref(storageService, `images/${name}/`);
            const uploadFile = await uploadString(fileRef, image, "data_url");
            imgUrl = await getDownloadURL(uploadFile.ref);
        }
        console.log(`
        이름: ${name},
        나이: ${age},
        성별: ${gender},
        종: ${species},
        질병: ${selectedItems},
        check 5: ${checkVal},
        사진: ${imgUrl}
      `);
        const res = await axios({
            headers: {
                withCredentials: true,
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Accept': 'application/json',
            },
            method: 'post',
            url: 'http://hana-umc.shop:8080/new',
            data: {
                name: name,
                age: age,
                socialization: checkVal[0],
                anxiety: checkVal[1],
                train: checkVal[2],
                bark: checkVal[3],
                bite: checkVal[4],
                illness: selectedItems,
                mainImg: imgUrl,
                species: species,
            }
        })
        if (res.data) {
            alert('Added Data');
        }
        // navigate('/listview');
    }

    const onNameChange = (event) => {
        setDiseaseName(event.target.value);
    };

    const addItem = (e) => {
        e.preventDefault();
        setItems([...items, diseaseName || `New item ${index++}`]);
        setDiseaseName('');
    };

    return (
        <div className={style.container}>
            <div className={style.registerTop}><span>등록하기</span></div>
            <form onSubmit={onSubmit}>
                <div className={style.infoWrap}>
                    <div className={style.photo}>
                        <UploadImg uploadImage={uploadImage} />
                    </div>
                    <div className={style.info}>
                        <p>
                            <label htmlFor="name" style={{ marginRight: "64px" }}>이름</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="이름을(를) 입력하세요"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={style.nameInput} />
                        </p>
                        <p className={style.genderInput}>
                            <span style={{ marginRight: "64px" }}>성별</span>
                            <input type='radio' name="gender" id="암컷" value="1" onChange={(e) => setGender(Number(e.target.value))} />
                            <label htmlFor='암컷'>암컷</label>
                            <input type='radio' name="gender" id="수컷" value="2" onChange={(e) => setGender(Number(e.target.value))} />
                            <label htmlFor='수컷'>수컷</label>
                            <input type='radio' name="gender" id="중성" value="3" onChange={(e) => setGender(Number(e.target.value))} />
                            <label htmlFor='중성'>중성</label>
                        </p>
                        <p>
                            <label htmlFor='age' style={{ marginRight: "64px" }}>나이</label>
                            <input
                                id="age"
                                type='number'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className={style.ageInpu}
                            />
                        </p>
                        <p className={style.speciesInput}>
                            <span style={{ marginRight: "35px" }}>동물 종류</span>
                            <input type='radio' id="강아지" name="species" value="강아지" onChange={(e) => setSpecies(e.target.value)} />
                            <label htmlFor='강아지'>강아지</label>
                            <input type='radio' id="고양이" name="species" value="고양이" onChange={(e) => setSpecies(e.target.value)} />
                            <label htmlFor='고양이'>고양이</label>
                        </p>
                        <p>
                            <span style={{ marginRight: "64px" }}>질병</span>
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
                        <div style={{display: "flex"}}>
                            <span style={{ marginRight: "35px" }}>행동 문제</span>
                            <div className={style.checkWrap}>
                                {
                                    checkArr.map((item, idx) => (
                                        <p className={style.checkList}>
                                            <span>{item}</span>
                                            {
                                                checkType.map((check) => (
                                                    <label>
                                                        <input
                                                            id={idx}
                                                            type='radio'
                                                            name={item}
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
                    </div>
                </div>
                <input className={style.submitBtn} type="submit" value="완료" />
            </form>
        </div>
    );
}

export default Register;