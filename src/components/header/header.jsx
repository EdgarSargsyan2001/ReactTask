import './header.css'



function Header({info}) {
    
  const Time = (x)=> x > 3600 ? `${Math.floor(x/3600)}h  ${Math.round(x % 3600/60)}m` : `${Math.round(x/60)}m`
  

  return (
    <div className='headerDiv' >
        
      <img className='headerImg' src={`./assets/${info.CoverImage}`} />

      <div className='headerInfoDiv'>

        <p className='Category'>{info.Category}</p>
        <img className='TitleImage' src={`./assets/${info.TitleImage}`} />
        <p className='ReleaseYear'>{info.ReleaseYear} {info.MpaRating} {Time(info.Duration)}</p>
        <p className='Description'>{info.Description}</p>
        <button className='PlayBtn'>Play</button>
        <button className='MoreInfoBtn'>More Info</button>
          
      </div>

      </div>
    );
  }

  export default Header