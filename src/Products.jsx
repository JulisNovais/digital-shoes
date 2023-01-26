import Card from "./Card";
import { useState } from "react";

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
      <h2>Produtos Relacionados</h2>
      <section>
        {/* <Card desconto={30} nome={"tennis"} valor={200} categoria={"tennis"} />
      <Card desconto={produtos[0].desconto}
              nome={produtos[0].nome}
              valor={produtos[0].valor} 
              categoria={produtos[0].categoria} />
      <Card desconto={produtos[1].desconto}
            nome={produtos[1].nome}
            valor={produtos[1].valor} 
            categoria={produtos[1].categoria} />
      <Card desconto={produtos[2].desconto}
            nome={produtos[2].nome}
            valor={produtos[2].valor} 
            categoria={produtos[2].categoria} /> */}
        {produtos.map((item) =>
          <Card desconto={item.desconto}
            nome={item.nome}
            valor={item.valor}
            categoria={item.categoria} />)}
      </section>
    </div>
  );
}

export default Products;
