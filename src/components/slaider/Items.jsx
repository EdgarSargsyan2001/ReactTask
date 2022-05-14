


function Items({activeItemPosition,TendingNow,changeInfo}){

    const translateLength = activeItemPosition * ( (window.screen.width > 500)?170:170 )
    const ulStyle = {transform:`translateX(-${translateLength+activeItemPosition*2}px)`}

    return(

    <ul className='ul' style={ulStyle}>     
        {
         TendingNow.map( (el)=> 
            <li key={el.Id} onClick={()=>changeInfo(el.Id)} className='list'>
                                
                <img className='imges' src={`./assets/${el.CoverImage}`} alt={el.Title} />
            </li>
                                    
            )
        }
    </ul>

    )
}

export default Items