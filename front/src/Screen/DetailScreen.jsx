import React, {useEffect, useState} from "react";
// import logo from './logo.svg';
// import "../DetailPage/Main.css";
import Banner from "../DetailPage/Banner";
import Posts from "../DetailPage/Posts";
import Slider from "../DetailPage/Slider";
import axios from "axios";
import Nav from "../components/Nav"

function DetailScreen() {

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
    <Nav/>
    <div>
        <Banner />
        <Posts 
          imgUrl = "https://web-wit.s3.ap-northeast-2.amazonaws.com/images/boardKnowhow/1680/knowhow_1638185402_3.jpg"
          name = "우유의 일상1"
          gender = "어쩌구 저쩌구"
        />
      {/* <hr />
      <Slider />  */}
    </div>
    </div>
  );
}



export default DetailScreen;