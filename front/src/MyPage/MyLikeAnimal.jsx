//나의 관심동물 패널 컴포넌트
import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {detailData} from "../DetailPage/dataDummy";
import Posts from "../MyPage/Posts";

function MyLikeAnimal(){
    return(
        <>
            <PostList>
                <PostListTitle><div>동물 히스토리</div></PostListTitle>
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
        </>
    );
}
const PostList=styled.section`
    margin-bottom:30px;
`;


const PostListTitle=styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 18px;
  color: black;
  padding: 20px;
  display:flex;
  justify-content:space-between;
`

const PostContainer=styled.div`
  border-radius:15px;
  padding:20px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 500px;
  overflow-y: scroll;
`;

export default MyLikeAnimal;