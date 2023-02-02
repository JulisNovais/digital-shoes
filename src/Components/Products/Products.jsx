import Card from "./Card";
import { useState } from "react";
import {ProductsArea, TitleArea} from "./styled";

function Products() {
  const [produtos, setProdutos] = useState([
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
    desconto: 30
  },
  {
    nnome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
    desconto: 30
  },
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
  },
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
  },
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
  },
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
  },
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
  },
  {
    nome: "K-Swiss V8 - Masculino",
    categoria: "Tenis",
    valor: 100,
  }])
  return (
    <ProductsArea>
        <TitleArea>Produtos em alta</TitleArea>
        <secion style={{ display: 'flex', 
                         gap: '24px', 
                         flexWrap: 'wrap',
                         width: '100%' }}>         
                
             {produtos.map((item) =>
               <Card desconto={item.desconto}
                 nome={item.nome}
                 valor={item.valor}
                 categoria={item.categoria} />)}
       
        </secion>
    </ProductsArea>
  );
}

export default Products;

