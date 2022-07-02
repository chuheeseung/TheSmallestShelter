import React from "react";
// import logo from './logo.svg';
import "../DetailPage/Main.css";
import Banner from "../DetailPage/Banner";
import Posts from "../DetailPage/Posts";
import Slider from "../DetailPage/Slider";

function DetailScreen() {
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