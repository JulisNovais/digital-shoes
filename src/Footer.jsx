import "./style/footer.css";

function Footer() {
  return (
    <div>
      <div className="container-footer">
        <div className="left">
          <h3>Digital Store</h3>
          <p className="footer-about">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>

        <div className="info">
          <div>
            <i className="info"></i>
            <p>Informação</p>
            <ul>
              <li>Sobre drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
        </div>

        <div className="categ">
          <div>
            <i className="categ"></i>
            <p>Categorias</p>
            <ul>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headfones</li>
              <li>Tênis</li>
            </ul>
          </div>
        </div>
        <div className="contato">
          <div>
            <i className="contato"></i>
            <p>Contato</p>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
