import tenisBanner2 from './assets/tenisBanner2.svg';

function Banner2() {
  return(
    <div style={{
      display: 'flex',
    }}>
      <div style={{
        width: '573px',
        height: '330px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '89px 100px',
      }}>
      
       <img src= {tenisBanner2} alt="" />
       
        </div>
      
      <div>
        BANNER2 - pedro
        BANNER2 - allan
        <div style={{
          textAlign: 'left',
          fontSize: '14px',
          color: '#C92071',
          padding: '17px 100px',
          border: '1px red',
        }}
        >Oferta especial</div>

        <div style={{
          fontSize: '48px',
          padding: '20px',
        }}
        >Air Jordan edição de 
  colecionador</div>

        <div style={{
          padding:'20px'
        }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam quaerat tenetur, incidunt maiores, doloremque architecto ducimus nulla magni adipiscVi cupiditate laboriosam deleniti dolores sunt illum ex quasi ipsa? Quisquam, recusandae?</div>
        
        <div style={{
          padding:'20px'
        }}>
          <input type="button" value="Ver oferta" /></div>
      </div>
  
    </div>
  )
}

export default Banner2;
