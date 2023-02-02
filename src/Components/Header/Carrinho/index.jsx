import React from "react";
import carrinhoTenis from "../../../assets/carrinhoTenis.svg";
import {
  CarrinhoContainer,
  CarrinhoImg,
  CarrinhoProdutos,
  CarrinhoTitle,
  PrecoCarrinho,
  Produto,
  Total,
  TotalCarrinho,
  ContentTotal,
  ButtonsCarrinho,
  ButtomEsvaziar,
  ButtomVerCarrinho,
} from "./style";

const Carrinho = () => {
  return (
    <CarrinhoContainer>
      <CarrinhoTitle>
        <h3>Meu Carrinho</h3>
      </CarrinhoTitle>

      <CarrinhoProdutos>
        <Produto>
          <CarrinhoImg>
            <img src={carrinhoTenis} alt="" />
          </CarrinhoImg>
          <div>
            <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
            <PrecoCarrinho>
              R$ 219,00 <span>R$ 300,00</span>
            </PrecoCarrinho>
          </div>
        </Produto>
        <Produto>
          <CarrinhoImg>
            <img src={carrinhoTenis} alt="" />
          </CarrinhoImg>
          <div>
            <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
            <PrecoCarrinho>
              R$ 219,00 <span>R$ 300,00</span>
            </PrecoCarrinho>
          </div>
        </Produto>
      </CarrinhoProdutos>

      <TotalCarrinho>
        <ContentTotal>
          <Total>Total: </Total>
          <span>438,00</span>
        </ContentTotal>
      </TotalCarrinho>

      <ButtonsCarrinho>
        <ButtomEsvaziar>Esvaziar</ButtomEsvaziar>
        <ButtomVerCarrinho>Ver carrinho</ButtomVerCarrinho>
      </ButtonsCarrinho>
    </CarrinhoContainer>
  );
};

export default Carrinho;
