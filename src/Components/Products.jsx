import Card from "./Card";
import { useState } from "react";
import {ProductsArea} from "../Components/styles"

function Products() {
  const [produtos, setProdutos] = useState([{
    nome: "Tennis Ardidas",
    categoria: "Tenis",
    valor: 200,
    desconto: 30
  },
  {
    nome: "Tennis Nikies",
    categoria: "Tenis",
    valor: 300,
    desconto: 20
  }
  ,
  {
    nome: "Tennis MissUno",
    categoria: "Tenis",
    valor: 100,
    desconto: 0
  }])
  return (
    <div>
      <h2>Produtos em alta</h2>
      <ProductsArea>
        {produtos.map((item) =>
          <Card desconto={item.desconto}
            nome={item.nome}
            valor={item.valor}
            categoria={item.categoria} />)}
      </ProductsArea>
    </div>
  );
}

export default Products;

