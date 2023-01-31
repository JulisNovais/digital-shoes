import './style/footer.css'
import DClogo from './assets/Digitallogo.svg'
import dctext from './assets/dctext.svg'
import facelogo from './assets/facelogo.svg'
import instalogo from './assets/instalogo.svg'
import tweetlogo from './assets/tweetlogo.svg'
import reta from './assets/reta.svg'


function Footer() {

  return (
    <div>
      <div class="container-footer">

        <div className='dclogo'>
          <div>
            <img className='dc' src={DClogo} alt="" /> Digital Store
          </div>
          <div>
            <img classname='dctext' srv={dctext} alt="" />
          </div>
          <p classname="footer-about"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore.</p>
        </div>
<div>
  <div classname='socials'>
        <img className='facelogo' src={facelogo} alt="" />
        </div>
        <div>
        <img className='instalogo' src={instalogo} alt="" />
        </div>
        <div>
        <img className='tweetlogo' src={tweetlogo} alt="" />
        </div>
</div>
{/* <div>
  <img classname='reta' src={reta} alt="" />
</div> */}
        
        <div class="info">
          <div>
            <i class="info"></i>
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

        <div class="categ">
          <div>
            <i class="categ"></i>
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
        <div class="contato">
          <div>
            <i class="contato"></i>
            <p>Contato</p>
            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Footer;
