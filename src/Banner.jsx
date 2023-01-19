import tenisGrande from './assets/tenisGrande.svg'
import pontilhado from './assets/pontilhado.svg'
import './style/banner.css'
import Button from './Button'

function Banner() {
  return (
    <div className="container">
      <h1 className="title">Queima de estoque Nike 🔥</h1>

      <div>
        <img className="tenisGrande" src={tenisGrande} alt="" />
      </div>

      <div>
        <img className="pontilhado" src={pontilhado} alt="" />
      </div>
      <Button />
    
    </div>
  )
}
export default Banner
