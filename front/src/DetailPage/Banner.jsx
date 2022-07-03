import React, { Component } from 'react'
import axios from "axios";

function Banner() {
    var data = {
        animalName: "길동이"
    }
        return (
            <section className="container-banner">
                    <a href="#detail">
                        <img id="profilepic" src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTRfOTgg/MDAxNjEwNjE0MDg3ODcy.28hxXvxgn2WbHgG7ZiL64bxAiizC3JBZwKCRP-8PcQIg.EDx8izDu_pCfgLBg7F15z7yARZfsEpvk15sX3INo8ZEg.JPEG.brteddy/IMG_0343.jpg?type=w800" width="170" height="170"/></a>
                        <h1> 길동이 </h1>
                        <p id="paragarph1"> 
                        구미 개농장에서 구조된 메론이

함께 구조된 구미개농장 친구들 중, 제일 오랫동안 유행사 식구로 지내며 구미 아이들 가족 찾기 대장정의 끝을 장식한 우리 우유

우유아, 이름 처럼 달콤한 견생을 살기 바래, 이모 삼촌들이 많이 사랑해💚 <br/>
관리 단체 : 개인<br/>
질병: 홍역, 슬개골<br/>
나이 : 2살
</p>
            </section>
        )
}

export default Banner


