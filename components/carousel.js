import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "flowbite-react";
import { attributes, react as HomeContent } from "../content/slider.md";

export default class NextJsCarousel extends Component {
  render() {
    let { slider } = attributes;
    return (
      <div className="mt-32 w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {slider.map((item, index) => {
            return <img key={index} src={item.logo} alt="..." />;
          })}
        </Carousel>
      </div>
    );
  }
}
