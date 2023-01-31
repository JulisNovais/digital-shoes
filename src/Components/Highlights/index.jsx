import destaqueStar from "../../assets/starWars.png";
import destaqueTenis from "../../assets/destaqueTenis.svg";
import destaqueFone from "../../assets/destaqueFone.svg";

import destaqueCalsa from "../../assets/destaqueCalsa.svg";
import destaqueFone2 from "../../assets/destaqueFone2.svg";
import destaqueTenis2 from "../../assets/destaqueTenis2.svg";

import {
  Colecoes,
  ContainerColecoes,
  ContainerDestaques,
  Tittle,
} from "./styles";
import Card from "./Card.jsx";
import Colection from "./Colection";

function Highlights() {
  return (
    <>
      <section style={{ margin: "0 100px" }}>
        <Tittle>Coleções em destaque</Tittle>
        <ContainerDestaques>
          <Card nome={"Novo dropSupreme"} img={destaqueStar} />
          <Card nome={"Coleção Adidas"} img={destaqueTenis} />
          <Card nome={"Novo Beats Bass"} img={destaqueFone} />
        </ContainerDestaques>
      </section>

      <ContainerColecoes>
        <Tittle>Coleções em destaque</Tittle>
        <Colecoes>
          <Colection img={destaqueTenis2} nome={"Camisetas"} />
          <Colection img={destaqueCalsa} nome={"Calças"} />
          <Colection img={destaqueCalsa} nome={"Bonés"} />
          <Colection img={destaqueFone2} nome={"Headphones"} />
          <Colection img={destaqueTenis2} nome={"Tênis"} />
        </Colecoes>
      </ContainerColecoes>
    </>
  );
}

export default Highlights;
