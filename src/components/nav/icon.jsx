import { useState } from "react"


function Icon({imgPaf,DivClick,title}) {


    return (
        <>
        {!title &&
            
            <div className='icon' onClick={()=>DivClick(imgPaf)}>

                <img className="iconImg" src={`./assets/icons/${imgPaf}`} alt={imgPaf}/>
                
            </div>
            
        }
        {title &&
            
            <div className='icon2' onClick={()=>DivClick(imgPaf)}>
                
                <h3><img className="iconImg2" src={`./assets/icons/${imgPaf}`} alt={imgPaf}/>{title}</h3>
                
            </div>
            
        }
        </>
    )
}

  export default Icon