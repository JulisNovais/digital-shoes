import tenisGrande from './assets/tenisGrande.svg'
import pontilhado from './assets/pontilhado.svg'

import tenis from './assets/tenis.svg'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import { useState } from 'react'

function Banner() {
  //                   0           1           2
  const arraySlides = [<Slide1 />, <Slide2 />, <Slide3 />]
  const [indice, setIndice] = useState(0)
  return (
    <div>
      {arraySlides[indice]}
      <div><input type="button" value="Anterior" onClick={() => setIndice((indice + arraySlides.length - 1) % arraySlides.length)} /></div>
      <div><input type="button" value="Posterior" onClick={() => setIndice((indice + arraySlides.length + 1) % arraySlides.length)} /></div>
      <div>{indice}</div>
    </div>
  )
}
export default Banner
