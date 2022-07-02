import React, {useEffect, useState} from "react";
// import logo from './logo.svg';
import "../DetailPage/Main.css";
import Banner from "../DetailPage/Banner";
import Posts from "../DetailPage/Posts";
import Slider from "../DetailPage/Slider";
import axios from "axios";

function DetailScreen() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [detail, setDetail] = useState("");
    const [items, setItems] = useState(["홍염", "파보", "코로나", "슬개골",]);


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
      <Banner />
      <br />
      <hr />
      <Posts />
      <hr />
      <Slider />
    </div>
  );
}



export default DetailScreen;