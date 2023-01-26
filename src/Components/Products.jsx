import React from "react";
import produtoTenis from "../assets/produtoTenis.svg"


function Products() {
  return (     
    <div>
        <h2>Produtos Relacionados  - MAX  e  MIGUEL</h2>
          <section>
            <div style={{maxWidth: '320px', border: 'solid 1px red  '}}>
              <img src={produtoTenis} alt=""/>
              <p>Ténis</p>
              <p> K-Swiss V8 - Masculino</p>
              <p>Price : <span>R$50</span></p>
              {/* <link to>"/Carrinho</link>   */}
            </div> 
          </section>
    </div>
  );
}

export default Products;