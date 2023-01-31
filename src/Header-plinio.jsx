import header from "./assets/headerLogo.svg";
import styled from "styled-components";
import Carrinho from "./Components/Carrinho/Carrinho";

const Link = styled.a`
  text-decoration: none;
  color: #474747;
`;

const Cabecalho = styled.header`
  height: 175px;
  display: flex;
  flex-direction: column;
  padding: 34px 100px 0 100px;
  background-color: #fff;
  box-sizing: border-box;
`;

const Cadastro = styled.a`
  color: #474747;
  font-size: 16px;
  letter-spacing: 0.01em;
`;

const Buttom = styled.button`
  background: #c92071;
  font-size: 16px;
  font-weight: 700;
  color: #f5f5f5;
  border: none;
  border-radius: 8px;
  padding: 10px 32px;
  cursor: pointer;
  letter-spacing: 0.01em;
`;

function Header() {
  return (
    <Cabecalho>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={header} alt="" />{" "}
          <span
            style={{
              color: "#C92071",
              fontSize: "36.4px",
              fontWeight: "600",
              lineHeight: "44px",
              letterSpacing: "0.01em",
            }}
          >
            Digital Store
          </span>
        </div>
        <input
          type="text"
          placeholder="Pesquisar produto..."
          style={{
            width: "800px",
            border: "none",
            background: "#F5F5F5",
            height: "38px",
            borderRadius: "8px",
            padding: "16px 24px",
            letterSpacing: "0.01em",
          }}
        />
        <Cadastro> Cadastre-se</Cadastro>
        <Buttom>Entrar</Buttom>
        <Carrinho />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Link href="#">Home</Link>
        <Link href="#">Produtos</Link>
        <Link href="#">Categorias</Link>
        <Link href="#">Meus Pedidos</Link>
      </div>
    </Cabecalho>
  );
}

export default Header;
