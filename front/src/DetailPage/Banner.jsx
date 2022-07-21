import React, { Component } from 'react'
import axios from "axios";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";


function Banner({ imgUrl, name, age, gender, species }) {
        return (
            <RootBanner>
                <DetailTitle>동물 상세 정보</DetailTitle>
                <ContainerBanner>
                    <Profile>
                        <ProfileImg src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTRfOTgg/MDAxNjEwNjE0MDg3ODcy.28hxXvxgn2WbHgG7ZiL64bxAiizC3JBZwKCRP-8PcQIg.EDx8izDu_pCfgLBg7F15z7yARZfsEpvk15sX3INo8ZEg.JPEG.brteddy/IMG_0343.jpg?type=w800"/>
                        <PetInfo>
                            <PetName> 길동이 </PetName>
                            <PetParagraph>
                                <InfoParagraph>
                                    <InfoItem1>
                                        동물종류
                                    </InfoItem1>
                                    <InfoItem1>
                                        성별
                                    </InfoItem1>
                                    <InfoItem1>
                                        나이
                                    </InfoItem1>
                                </InfoParagraph>
                                <InfoParagraph>
                                    <InfoItem2>
                                        고양이
                                    </InfoItem2>
                                    <InfoItem2>
                                        여
                                    </InfoItem2>
                                    <InfoItem2>
                                        2살
                                    </InfoItem2>
                                </InfoParagraph>
                            </PetParagraph>
                        </PetInfo>
                    </Profile>
                    <IconSet><AiOutlineStar/></IconSet>      
                </ContainerBanner>
            </RootBanner>
        )
}

const RootBanner=styled.section`
    width: 100%;
    height: 460px;
    margin-top:65px;
    background: #FBC22E;
    font-family: 'Spoqa Han Sans Neo';
    padding: 5px 0px;

`;

const ContainerBanner=styled.div`
    display:flex;
    justify-content:space-between;
    align-content:center;
    width: 100%;
    height: 366px;
    background-color:#ffffff;
    padding: 45px 100px;
`

const Profile= styled.div`
    display:flex;  

`;

const DetailTitle=styled.h3`
    font-weight: 700;
    margin :25px 100px;
    color: white;
    
`;

const ProfileImg= styled.img `
    border-radius: 10px;
    padding-top: 7px;
    width:275px; 
    height:275px;
`;

const PetInfo=styled.div`
    margin-left: 50px;
`;

const PetName=styled.h1`
    font-weight: 700;
`;

const PetParagraph=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const InfoParagraph=styled.p`
`;

const InfoItem1=styled.h5`

    margin-top:20px;
`

const InfoItem2=styled.h5`
    margin-top:20px;
    margin-left:60px;
    font-weight: 700;
    font-size:12px;
`


const IconSet=styled.div`

`;

export default Banner


