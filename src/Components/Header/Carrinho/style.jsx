import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55px;
  right: -60px;
  width: 340px;
  height: 480px;
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 30px;
  opacity: 0.95;
`;

export const CarrinhoTitle = styled.div`
  border-bottom: 2px solid #cccccc;
  h3 {
    color: #474747;
  }
`;

export const CarrinhoProdutos = styled.div``;

export const CarrinhoImg = styled.div`
  box-sizing: border-box;
  background: #e2e3ff;
  width: 75px;
  height: 58px;
  padding: 12px;
  border-radius: 4px;
`;

export const Produto = styled.div`
  display: flex;
  gap: 20px;

  margin: 20px 0;

  h3 {
    padding: 0;
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const PrecoCarrinho = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #474747;

  span {
    color: #cccccc;
    text-decoration-line: line-through;
  }
`;

export const TotalCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #cccccc;
  margin: 20px 0;
`;

export const ContentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;

  span {
    color: #ee4266;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Total = styled.span`
  font-size: 16px;
  color: #1f1f1f;
  font-weight: 700;
`;

export const ButtonsCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  align-items: center;
`;

export const ButtomEsvaziar = styled.div`
  border-bottom: 1px solid #474747;
  cursor: pointer;
  color: #474747;
  font-weight: 500;
  line-height: 22px;
`;

export const ButtomVerCarrinho = styled.div`
  background: #c92071;
  color: #f5f5f5;
  font-weight: 700;
  padding: 12px 8px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;
