import tenisGrande from './assets/tenisGrande.svg'
import pontilhado from './assets/pontilhado.svg'
import './style/banner.css'
import Button from './Button'

import tenis from './assets/tenis.svg'

function Slide2() {
  return (
    <div style={{
      display: 'flex',
      border: '1px solid red'
    }}>
      <div style={{
        width: '100%',
        border: '1px solid green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src={tenis} alt="" />
      </div>
      <div style={{
        width: '100%',
        border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '124px 100px',
        gap: '20px'
      }}>
        <div>Melhores ofertas personalizadas</div>
        <div>Queima de stoque Nike 🔥</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div style={{
          paddingTop: '20px'
        }}><input type="button" value="Ver Ofertas" /></div>
      </div>
    </div >
  )
}
export default Slide2
