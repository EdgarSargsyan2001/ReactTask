import './slaider.css'
import Items from './Items'
import { useState } from 'react'
import ButtonNextPrev from './ButtonNextPrev'



function Slaider({TendingNow,changeInfo}) {
  
  const [activeItemPosition,setActiveItemPosition] = useState(0)
  const [size,setZise] = useState(-0.4)    

  const First = (arr)=>{
    let item,Id = sessionStorage?.getItem('first')
    
    arr = arr.filter((el)=>{

      if(el.Id === Id) {
        item = el
        return false
      }
      return true

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