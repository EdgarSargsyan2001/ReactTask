import { useState,useEffect } from "react"

function ButtonNextPrev({activeItemPosition,setActiveItemPosition,setZise,itemsLength}){


    const [showButtonNext,setShowButtonNext] = useState(true)
    const [showButtonPrev,setShowButtonPrev] = useState(false)
    const [flagInt,setFlagInt] = useState(true)


    function autoReplace(){

      let clearInt
  
      if(activeItemPosition < itemsLength - 1 && flagInt){
  
        clearInt = setTimeout(()=>{
          setActiveItemPosition((prev)=>prev + 1)
          setShowButtonPrev(true)
          setZise(-0.4)
          if(activeItemPosition === itemsLength - 2 ) setShowButtonNext(false)
        },3000)
  
      }else{
  
        clearInt = setTimeout(()=>{
          setActiveItemPosition((prev)=>prev - 1)
          setShowButtonNext(true)
          setZise(0.4)
        },3000)
  
        setFlagInt(false)
      }
      if(activeItemPosition === itemsLength-5){
        setActiveItemPosition(0)
      }
      if(activeItemPosition === 0){
        setFlagInt(true)
        setShowButtonPrev(false)
      }
      return clearInt
        
    }

    useEffect(()=>{
  
      let clearInt = autoReplace()
      return () => clearTimeout(clearInt)

    })

return(
    <>
        {
            showButtonPrev && <button className='prev' onClick={()=>{

                if(activeItemPosition > 0 ){
                    setActiveItemPosition((prev) => prev - 1)
                    setShowButtonNext(true)
                    setZise(0.4)
                }
                if(activeItemPosition < 2){
                  setShowButtonPrev(!showButtonPrev)
                }

            }} >{'<'}</button>
        }

        {
            showButtonNext && <button className='next' onClick={()=>{

                if(activeItemPosition < itemsLength - 1 ){
                    setActiveItemPosition((prev)=>prev + 1)
                    setShowButtonPrev(true)
                    setZise(-0.4)
                }
                if(activeItemPosition === itemsLength-5){
                  setActiveItemPosition(0)
                }

            }} >{'>'}</button>
        }
    </>
)
}

export default ButtonNextPrev