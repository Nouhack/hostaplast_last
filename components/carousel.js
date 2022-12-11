import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "flowbite-react";
import { attributes, react as HomeContent } from "../content/slider.md";

export default class NextJsCarousel extends Component {
  render() {
    let { slider } = attributes;
    const images = [
      {
        id: 1,
        name: "first one",
        img: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      },
      {
        id: 2,
        name: "second one",
        img: "https://images.unsplash.com/photo-1555371363-27a37f8e8c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 3,
        name: "third one",
        img: "https://images.unsplash.com/photo-1604355231395-bf02775c357f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 4,
        name: "fourth one",
        img: "https://plus.unsplash.com/premium_photo-1661963463868-241cc572e3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
      },
    ];
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
