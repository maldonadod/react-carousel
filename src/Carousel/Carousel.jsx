import React from "react";
import { Button } from "../Button";
import { noop } from "../utils";
import useCarousel from "../hooks/useCarousel";
import { CarouselSlideDefault } from "./CarouselSlides";

function toCarouselSlide(props) {
  return <CarouselSlideDefault {...props} />
}

function CarouselContainer({ children, currentIndex }) {
  const SLIDE_WIDTH = 275;
  const style = {
    transform: `translateX(-${currentIndex * SLIDE_WIDTH}px)`
  };
  return (
    <div className="carousel-container">
      <div style={style} className="carousel-slides-container">
        {children}
      </div>
    </div>
  );
}

export default function Carousel({ items, onActiveSlideChanged = noop }) {
  const { slides, currentIndex, next, previous } = useCarousel(items);

  React.useEffect(() => {
    onActiveSlideChanged(items[currentIndex])
  }, [items, onActiveSlideChanged, currentIndex])

  return (
    <div className="super-container">
      <Button text="Previous" onClick={previous} />
      <Button text="Next" onClick={next} />
      <CarouselContainer currentIndex={currentIndex}>
        {slides.map(toCarouselSlide)}
      </CarouselContainer>
    </div>
  );
}