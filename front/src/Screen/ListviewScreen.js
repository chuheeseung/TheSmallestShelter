import React, { useState } from 'react';
import Filtering from '../ListViewPage/components/Filtering';
import DataItem from '../ListViewPage/components/DataItem';
import Banner from '../ListViewPage/components/Banner';
import { dummy } from '../ListViewPage/dataDummy';
import style from './ListviewScreen.module.css';

export default function ListviewScreen() {
    return (
    <>
        <Banner />
        <Filtering />
            <div className={style.dataContainer}>
                {
                    dummy.results.map((item) => {
                        return (
                            <DataItem
                                key = {item.id}
                                id = {item.id}
                                photoUrl = {item.photo}
                                name = {item.name}
                                age = {item.age}
                                species = {item.species}
                                isAdopted = {item.isAdopted}
                                gender = {item.gender}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}


/*
import '../App.css';
import "antd/dist/antd.min.css";
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Photo from '../ListviewPage/photo';
import axios from "axios";
import {useEffect,useState} from "react";

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
*/