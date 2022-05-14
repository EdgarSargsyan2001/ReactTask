import ButtonNextPrev from './ButtonNextPrev'
import { useState } from 'react'
import Items from './Items'
import './slaider.css'



function Slaider({TendingNow,changeInfo}) {
  
  const [activeItemPosition,setActiveItemPosition] = useState(0)
  const [size,setZise] = useState(-0.4)    

  const First = (arr)=>{
    let item,Id = sessionStorage?.getItem('first')
    
    arr = arr.filter((el)=>{

      if(el.Id !== Id) return true
        
      item = el
      
    })

    if(item) arr.unshift(item)
    
    return arr
     
  }

  return(
    <div className='screen' >  

      <Items
        TendingNow={First(TendingNow)}
        activeItemPosition={activeItemPosition}
        changeInfo={changeInfo}
      />
      <ButtonNextPrev
        activeItemPosition={activeItemPosition}
        setActiveItemPosition={setActiveItemPosition}
        size={size}
        setZise={setZise}
        itemsLength={TendingNow.length}
      />

    </div>
    )
}

  export default Slaider