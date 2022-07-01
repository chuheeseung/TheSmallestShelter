import React, { useState } from "react";
import { CarouselProvider } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  Card,
  ButtonContainer,
  SliderContainer,
  StyledSlide,
  StyledSlider,
  BackButton,
  NextButton,
  CardText,
  CardImage,
  CardButton,
  CardButtonBlue
} from "./styles";

const data = [
  {
    title: "길냥이1",
    cardText: "here is some random text",
    src: "https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_960_720.jpg"
  },
  {
    title: "길냥이1",
    cardText: "here is some random text",
    src: "https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_960_720.jpg"

  },
  {
    title: "길냥이1",
    cardText: "here is some random text",
    src: "https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_960_720.jpg"
  },
  {
    title: "길냥이1",
    cardText: "here is some random text",
    src: "https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_960_720.jpg"

  },
  {
    title: "길냥이1",
    cardText: "here is some random text",
    src: "https://cdn.pixabay.com/photo/2015/06/07/19/42/animal-800760_960_720.jpg"
  },
  {
    title: "길냥이1",
    cardText: "here is some random text"
  },
];

const CardCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={data.length}
      visibleSlides={3}
      step={3}
    >
      <ButtonContainer>
        <BackButton>
          <FiChevronLeft size="1.5em" />
        </BackButton>
        <NextButton>
          <FiChevronRight size="1.5em" />
        </NextButton>
      </ButtonContainer>
      <SliderContainer>
        <StyledSlider classNameAnimation="animating">
          {data.map((item, index) => (
            <StyledSlide
              index={index}
              classNameHidden="hidden"
              classNameVisible="visible"
            >
              <Card>
                <CardImage backgroundImage={item.src} />
                <CardText>
                  <h2>{item.title}</h2>
                  <h3>{item.cardText}</h3>
                </CardText>
                <CardButton />
                <CardButtonBlue />
              </Card>
            </StyledSlide>
          ))}
        </StyledSlider>
      </SliderContainer>
    </CarouselProvider>
  );
};

export default CardCarousel;
