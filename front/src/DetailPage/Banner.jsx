import React, { Component } from 'react'
import axios from "axios";

function Banner() {
    const animalName="길동이"
    var data = {
        animalName: "길동이"
    }
    axios.post('http://hana-umc.shop:8080/test', data)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    // const fetchAddClass = async () => {
    //     try {
    //         // 요청이 시작 할 때에는 error 와 users 를 초기화하고
    //         axios.post(
    //             'http://hana-umc.shop:8080/test',{
    //                 headers:{
    //                     "Content-Type" : "application/json",
    //                     "Access-Control-Allow-Origin" : "*",
    //                 },
    //                 widthCredentials: true,
    //             })
    //             .then(res =>{
    //                 console.log("성공");// 데이터는 response.data 안에 들어있습니다.
    //                 }
    //             )
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };
        return (
            <section className="container-banner">
                    <a href="#detail">
                        <img id="profilepic" src="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg"  width="170" height="170" alt="profilepic"/></a>
                        <h1> 길동이 </h1>
                        <p id="paragarph1"> 
                        구미 개농장에서 구조된 메론이

함께 구조된 구미개농장 친구들 중, 제일 오랫동안 유행사 식구로 지내며 구미 아이들 가족 찾기 대장정의 끝을 장식한 우리 메론이

메론아, 이름 처럼 달콤한 견생을 살기 바래, 이모 삼촌들이 많이 사랑해💚 <br/>
</p>
            </section>
        )
}

export default Banner


