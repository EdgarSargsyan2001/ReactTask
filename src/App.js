import { useState } from 'react';
import Header from './components/header/header.jsx'
import Data from './data/data.json'
import './App.css'
import Nav from './components/nav/nav.jsx';


function App() {

  const [headerInfo,setHeaderInfo] = useState(Data.Featured)

  const chlickHome = () => setHeaderInfo(Data.Featured)
  const changeInfo = (Id)=>{

    sessionStorage.setItem('first',+Id)
    setHeaderInfo( Data.TendingNow.find((el)=>el.Id === Id) )
      
  }
  
    
  

  return (
    <div className="App">

      
      
      <Header 
        info={headerInfo}
        TendingNow={Data.TendingNow}
        changeInfo={changeInfo}  
        chlickHome={chlickHome}
      />

      

    </div>
  );
}

export default App;
