import Slaider from './components/slaider/slaider.jsx';
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx';
import Data from './data/data.json'
import { useState } from 'react';
import './App.css'


function App() {

  const [headerInfo,setHeaderInfo] = useState(Data.Featured)

  const chlickHome = () => setHeaderInfo(Data.Featured)

  const changeInfo = (Id)=>{

    sessionStorage.setItem('first',+Id)
    setHeaderInfo( Data.TendingNow.find((el)=>el.Id === Id) )
      
  }
  
    
  return (
    <div className="App">

      <Slaider
        TendingNow={Data.TendingNow}
        changeInfo={changeInfo}

      />

      <Nav
        chlickHome={chlickHome}
        
      />

      <Header 
        info={headerInfo}

      />

    </div>
  );
}

export default App;
