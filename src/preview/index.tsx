import React from "react";
import { Link } from "react-router-dom";

const Preview: React.FC = () => {
  return(
    <>
      <Link to={'/button'} target='_blank'>evp-button</Link>
      <Link to={'/input'} target='_blank'>evp-input</Link>
      <Link to={'/color'} target='_blank'>evp-color</Link>
      <Link to={'/menu'} target='_blank'>evp-menu</Link>
    </>
  )
}

export default Preview;