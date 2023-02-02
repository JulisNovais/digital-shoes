import React from "react";
import {ContainerCard, CardInfo, Span, TittleItem, Buttom} from "./styles"

const Destaques = ({nome, img}) => {
  return (
    <>
      <ContainerCard>
        <CardInfo>
          <Span>30% OFF</Span>
          <TittleItem>{nome}</TittleItem>
          <Buttom>Comprar</Buttom>
        </CardInfo>
        <div>
          <img src={img} alt="" />
        </div>
      </ContainerCard>
    </>
  );
};

export default Destaques;
