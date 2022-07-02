import '../App.css';
import "antd/dist/antd.min.css";
import { dummy } from '../ListviewPage/dataDummy';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Photo from '../ListviewPage/photo';
import axios from "axios";
import {useEffect,useState} from "react";
import Nav from "../components/Nav";

function ListviewScreen() {
    const [data,setData]=useState([]);

    useEffect(()=> {axios({
            method: "GET",
            url: "http://hana-umc.shop:8080/list",
            headers: {
                withCredentials: true,
                "Access-Control-Allow-Origin": "http://localhost:3000",
                'Accept': 'application/json',
            }
        })
        .then((response) => setData(response.data))
    });

    return (
        <div className="app">
            <Layout>
                <Content className="app-container">
                    <div className="list-title">🐱 동물들을 소개합니다 🐶</div>
                    <div className="list-container">
                        {
                            data.map((item) => {
                                return (
                                    <Photo
                                        imgUrl = {item.imgUrl}
                                        name = {item.name}
                                        gender = {item.gender}
                                        age = {item.age}
                                        species = {item.species}
                                    />
                                )
                            })
                        }
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default ListviewScreen;