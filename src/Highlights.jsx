import styled from "styled-components";
import destaqueStar from "./assets/starWars.png";
import destaqueTenis from "./assets/destaqueTenis.svg";
import destaqueFone from "./assets/destaqueFone.svg";

import destaqueCamisa from "./assets/destaqueCamisa.svg";
import destaqueCalsa from "./assets/destaqueCalsa.svg";
import destaqueFone2 from "./assets/destaqueFone2.svg";
import destaqueTenis2 from "./assets/destaqueTenis2.svg";

const ContainerDestaques = styled.div`
  background: #d8e3f2;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

//giovanne//
const ContaineerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
  width: 100%;
  gap: 10px;
`;

const Span = styled.span`
  background: #e7ff86;
  font-size: 14px;
  font-weight: 700;
  padding: 5px 15px;
  border-radius: 29px;
`;

const Tittle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  color: #474747;
  font-size: 16px;
`;

const TittleItem = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #1f1f1f;
`;

const Buttom = styled.button`
  width: 153px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: #f5f5f5;
  color: #c92071;
  font-weight: 700;
  cursor: pointer;
`;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Highlights() {
  return (
    <>
      <section style={{ margin: "0 100px" }}>
        <Tittle>Coleções em destaque</Tittle>
        <div style={{ display: "flex", gap: "16px" }}>
          <ContainerDestaques>
            <ContaineerInfo>
              <Span>30% OFF</Span>
              <TittleItem>Novo dropSupreme</TittleItem>
              <Buttom>Comprar</Buttom>
            </ContaineerInfo>
            <div>
              <img src={destaqueStar} alt="" />
            </div>
          </ContainerDestaques>
          <ContainerDestaques>
            <ContaineerInfo>
              <Span>30% OFF</Span>
              <TittleItem>Novo dropSupreme</TittleItem>
              <Buttom>Comprar</Buttom>
            </ContaineerInfo>
            <div>
              <img src={destaqueTenis} alt="" />
            </div>
          </ContainerDestaques>
          <ContainerDestaques>
            <ContaineerInfo>
              <Span>30% OFF</Span>
              <TittleItem>Novo dropSupreme</TittleItem>
              <Buttom>Comprar</Buttom>
            </ContaineerInfo>
            <div>
              <img src={destaqueFone} alt="" />
            </div>
          </ContainerDestaques>
        </div>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          flexDirection: "column",
        }}
      >
        <Tittle>Coleções em destaque</Tittle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <ContainerImg>
            <img
              style={{ height: "104px", width: "104px", fontSize: "24px" }}
              src={destaqueCamisa}
              alt=""
            />
            <p>Camisetas</p>
          </ContainerImg>
          <ContainerImg>
            <img src={destaqueCalsa} alt="" />
            <p>Calças</p>
          </ContainerImg>
          <ContainerImg>
            <img src={destaqueCalsa} alt="" />
            <p>Bonés</p>
          </ContainerImg>
          <ContainerImg>
            <img src={destaqueFone2} alt="" />
            <p>Headphones</p>
          </ContainerImg>
          <ContainerImg>
            <img src={destaqueTenis2} alt="" />
            <p>Tênis</p>
          </ContainerImg>
        </div>
      </section>
    </>
  );
}

export default Highlights;
