
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import { useState } from 'react'

function Banner() {
  const arraySlides = [<Slide1 />, <Slide2 />, <Slide3 />]
  const [indice, setIndice] = useState(0)
  return (
    <div >
      {arraySlides[indice]}
      <div className='div-btn'>
        <input className='circle-btn'type="button" value="" onClick={() => setIndice((indice + arraySlides.length - 1) % arraySlides.length)} />
        <input className='circle-btn' type="button" value="" onClick={() => setIndice((indice + arraySlides.length + 1) % arraySlides.length)} />
      </div>
      {/* <div>{indice}</div> */}
    </div>
  )
}
export default Banner
