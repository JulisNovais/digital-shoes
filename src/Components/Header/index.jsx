import header from "../../assets/headerLogo.svg";
import logo from "../../assets/headerCarrinho.svg";
import { Cabecalho, Link, Cadastro, Buttom } from "./styles";
import Carrinho from "./Carrinho";
import { useState } from "react";

function Header() {
  const [showCarrinho, setShowCarrinho] = useState(false);
  return (
    <Cabecalho>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            width: "640px",
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

        <span style={{ position: "relative", cursor: "pointer" }}>
          <img
            src={logo}
            alt="carrinho"
            onClick={() => setShowCarrinho(!showCarrinho)}
          />
          {showCarrinho && <Carrinho />}
        </span>
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
