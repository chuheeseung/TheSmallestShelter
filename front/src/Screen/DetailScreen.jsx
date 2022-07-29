import React, {useEffect, useState} from "react";
import Banner from "../DetailPage/Banner";
import Posts from "../DetailPage/Posts";
import SliderSection from "../DetailPage/SliderSection";
import axios from "axios";
import Nav from "../components/Nav"
import { detailData } from '../DetailPage/dataDummy';
import styled from 'styled-components';
import ReactModal from 'react-modal';

function DetailScreen() {

    ReactModal.setAppElement('#root');
    // useEffect(()=> {axios({
    //     method: "GET",
    //     url: "http://hana-umc.shop:8080/???",
    //     headers: {
    //         withCredentials: true,
    //         "Access-Control-Allow-Origin": "http://localhost:3000",
    //         'Accept': 'application/json',
    //     }
    // })
    //     .then((response) => console.log(response.data))
    // });
    return (
        <div>
            <div>
                <Banner />
                <PostList>
                    <PostListTitle><div>동물 히스토리</div><a href>+</a></PostListTitle>
                    <PostContainer>
                        {
                            detailData.results.map((item) => {
                                return (
                                    <Posts
                                        imgUrl = {item.photo}
                                        name = {item.name}
                                        info = {item.info}
                                    />

                                )
                            })
                        }
                    </PostContainer>
                </PostList>
                <SliderContainer>
                    <SliderSection />
                </SliderContainer>
            </div>

        </div>
    );
}

const PostList=styled.section`
    margin-bottom:30px;
`;


const PostListTitle=styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 18px;
  margin :25px 90px;
  color: black;
  padding-left: 24px;
  display:flex;
  justify-content:space-between;
`

const PostContainer=styled.div`
  background-color:white;
  border-radius:15px;
  margin:0px 50px 50px 50px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 5px 10px 5px lightgray;
  justify-content: center;
  height: 500px;
  overflow-y: scroll;
`;

const SliderContainer=styled.div`
  background-color:white;
  border-radius:15px;
  margin:0px 50px 0px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
`;

export default DetailScreen;