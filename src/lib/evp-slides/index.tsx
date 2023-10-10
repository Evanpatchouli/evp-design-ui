import React from "react";

export type EvpSlidesProps = {};

const items = [<h1>EvpSlides</h1>, <h1>EvpSlides</h1>];

/** based on window like in evp-steps */
const EvpSlides: React.FC<EvpSlidesProps> = (props) => {
  return <div className="evp-slides">
    {items.map((item) => <div className="evp-slides-item">{item}</div>)}
  </div>;
};

export default EvpSlides;
