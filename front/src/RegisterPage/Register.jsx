import React, { useState } from 'react';
import style from './Register.module.css';
import UploadImg from './UploadImg';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Typography } from 'antd';
const { Option } = Select;
let index = 0;


function Register() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [items, setItems] = useState(["홍염", "파보", "코로나", "슬개골",]);
    const [diseaseName, setDiseaseName] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = items.filter((o) => !selectedItems.includes(o));
    const [health, setHealth] = useState("");
    const [manager, setManager] = useState("");
    const [check, setCheck] = useState("");
    // const [check, setCheck] = useState({
    //   "사회화": "",
    //   "분리불안": "",
    //   "베변 훈련": "",
    //   "짖음": "",
    //   "입질": "",
    // });

    const checkArr = ["사회화", "분리불안", "배변 훈련", "짖음", "입질"];
    const checkList = ["완벽해요", "연습중이에요", "아직 부족해요"];

    const onChangeManager = (e) => {
        setManager(e.target.value);
    };

    const onChangeCheck = (e) => {
        setCheck(`${e.target.name}-${e.target.value}`)
        console.log(`${e.target.name}-${e.target.value} `);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(`이름 ${name}, 나이 ${age}, 질병 ${selectedItems}, 검진 결과 ${health}, 관리자 ${manager}, 체크 ${check}`)
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
            <form onSubmit={onSubmit}>
                <div className={style.infoWrap}>
                    <div className={style.photo}><UploadImg /></div>
                    <div className={style.info}>
                        <p>
                            <label for="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="이름을 입력하세요"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </p>
                        <p>
                            <label for="age">나이</label>
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
                        <p className={style.textarea}>
                            <label for="health">건강검진</label>
                            <textarea
                                id="health"
                                placeholder="건강검진 결과를 입력하세요"
                                value={health}
                                onChange={(e) => setHealth(e.target.value)} />
                        </p>
                        <p>
                            <label for="manager">관리자</label>
                            <input type='radio'
                                   name='manager'
                                   value='임보 단체'
                                   onChange={onChangeManager} />임보 단체
                            <input type='radio'
                                   name='manager'
                                   value='개인'
                                   onChange={onChangeManager} />개인
                        </p>
                        {
                            checkArr.map((item) => (
                                <p className={style.checkList}>
                                    <span>{item}</span>
                                    {
                                        checkList.map((c) => (
                                            <label>
                                                <input type='radio'
                                                       name={item}
                                                       value={c}
                                                       onChange={onChangeCheck}
                                                />{c} </label>
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