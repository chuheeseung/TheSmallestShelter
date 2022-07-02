import React from "react";
import "../styles.css";
import CardCarousel from "../Carousel/CardCarousel";
import { CarouselContainer } from "../styles";

export default function Slider() {
  return (
    <CarouselContainer>
      <h1>다른 임보 동물들</h1>
      <CardCarousel/>
    </CarouselContainer>
  );
}