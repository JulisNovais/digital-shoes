// import React from "react";
// import produtoTenis from "../assets/produtoTenis.svg"
// import Card from "./Card"
// import {useState} from "react";


// function Products() {
//   const[produtos, setProdutos] = useState([{
  
//     nome: "Tenis Nikies",
//     categoria: "Tenis",
//     valor: 300,
//     desconto: 204,
//   },
//   {
  
//     nome: "Tenis Nikies",
//     categoria: "Tenis",
//     valor: 300,
//     desconto: 204,
//   },
//   {
//     nome: "Tenis Adidas",
//     categoria: "Tenis",
//     valor: 370,
//     desconto: 202,
//   }])
//   return (     
//     <div>
//         <h2>Produtos Relacionados</h2>
//           <section>
//             {produtos.map((item) => 
//             <Card desconto={item.desconto} 
//                   nome={item.nome} 
//                   valor={item.valor}
//                   categoria={item.categoria}/>)}
//           </section>
//     </div>
//   );
// }

// // export default Products;



import React from "react";
import produtoTenis from "../assets/produtoTenis.svg";
// import {ProductArea} from "../Components";


function Products() {
  return (     
    <div>
        <h2>Produtos em Alta  - (MAX  e  MIGUEL)</h2>
          <section>
            <div style={{
                  display: "flex",
                  gap: '50px', 
                  maxWidth: '320px', 
                  border: 'solid 1px black',
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  }}>
              <img src={produtoTenis} alt=""/>
              <p>Ténis</p>
              <p> K-Swiss V8 - Masculino</p>
              <p>Price : <span>R$50</span></p>
             </div> 
             <div style={{maxWidth: '320px', border: 'solid 1px red  '}}>
              <img src={produtoTenis} alt=""/>
              <p>Ténis</p>
              <p> K-Swiss V8 - Masculino</p>
              <p>Price : <span>R$50</span></p>
             </div> 
          </section>
    </div>
  );
}

export default Products;