import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
  render() {
    const images = [
      "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      "https://images.unsplash.com/photo-1555371363-27a37f8e8c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1604355231395-bf02775c357f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://plus.unsplash.com/premium_photo-1661963463868-241cc572e3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
    ];
    return (
      <Carousel showThumbs={false} emulateTouch={true}>
        {images.map((item, index) => {
          return (
            <div>
              <img className="h-96 object-cover" src={item} alt="image1" />
              <p className="legend">Image 1</p>
            </div>
          );
        })}
      </Carousel>
    );
  }
}
