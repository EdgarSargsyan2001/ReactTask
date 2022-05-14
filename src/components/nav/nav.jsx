import { useState } from 'react';
import Icon from './icon';
import './nav.css'


function Nav({chlickHome}) {

  const [flag,setFlag] = useState(false)

  const DivClick = (imgPaf) =>{
    if(imgPaf === 'Group 46.png' ) chlickHome()
  }


  return (

    <div className='navDiv'>
     

      <div 
        className='icons' 
        onMouseEnter={()=>setFlag(true) } 
        onMouseLeave={()=>setFlag(false)} 
      >
        
        {flag &&
          <div  className='more'>
            <div className='user'>

            <img width={60} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="uese" /> 
              <h3 className='UserNamr'>Name </h3>
            </div>

            <div className='langExit'>
              <p>LANGUAGE</p>
              <p>GET HELP</p>
              <p>EXIT</p>

            </div>
              <div className='position'>
              <Icon DivClick={DivClick} title={'Search'} imgPaf={'ICON - Search.png'}/>
              <Icon DivClick={DivClick} title={'Home'} imgPaf={'Group 46.png'}/>
              <Icon DivClick={DivClick} title={'TV Shows'} imgPaf={'Group 56.png'}/>
              <Icon DivClick={DivClick} title={'Movies'} imgPaf={'Group 54.png'}/>
              <Icon DivClick={DivClick} title={'Genres'} imgPaf={'Group 53.png'}/>
              <Icon DivClick={DivClick} title={'Watch Later'} imgPaf={'Group 47.png'}/>
            </div>
          </div>
        }

          <div className='position'>
            <Icon  imgPaf={'ICON - Search.png'}/>
            <Icon  imgPaf={'Group 46.png'}/>
            <Icon  imgPaf={'Group 56.png'}/>
            <Icon  imgPaf={'Group 54.png'}/>
            <Icon  imgPaf={'Group 53.png'}/>
            <Icon  imgPaf={'Group 47.png'}/>
          </div>

      </div>

      
    </div>
  );
}

  export default Nav