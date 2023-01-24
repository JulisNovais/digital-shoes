import tenisGrande from './assets/tenisGrande.svg'
import pontilhado from './assets/pontilhado.svg'
import './style/slide1.css'
import Button from './Button'

import tenis from './assets/tenis.svg'

function Slide1() {
  return (
    <div className='container1'>
      <div className='container2'>
        <div className='secondTitle'>Melhores ofertas personalizadas</div>
        <div className='mainTitle'>Queima de stoque Nike 🔥</div>
        <div className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div className='container3'style={{
          
        }}><input className="btn"type="button" value="Ver Ofertas" /></div>
      </div>
      <div className='container4'>
        <img src={tenis} alt="" />
      </div>
    </div >
  )
}
export default Slide1
