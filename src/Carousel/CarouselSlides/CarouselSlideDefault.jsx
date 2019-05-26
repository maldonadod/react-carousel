import React from "react";
import { classnames } from "../../utils";

export function CarouselSlideDefault({ title, artworkUrl, className }) {
  return (
    <div className={classnames("carousel-slide", className)}>
      <p>{title}</p>
      <img
        src={artworkUrl}
        alt=""
      />
    </div>
  );
}