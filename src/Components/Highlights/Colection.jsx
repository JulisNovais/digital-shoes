import React from "react";
import {ContainerImg} from "./styles.jsx"
const Colection = ({img, nome}) => {
  return (
    <ContainerImg>
      <img src={img} alt="" />
      <p>{nome}</p>
    </ContainerImg>
  );
};

export default Colection;
