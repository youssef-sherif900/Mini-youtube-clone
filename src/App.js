
import './App.css';
import Header from "./component/Header"
import RecomandedVideos from './component/RecomendedVideos';
import Sidebar from './component/Sidebar';
import SearchPage from './component/SearchPage';
import Video from './component/videoPage';
import{BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { useState } from 'react';



function App() {
  const[expand,setExpand] = useState(false);
  function checkExpand(){
    if(expand === false){
      setExpand(true)
    } else if(expand === true){
      setExpand(false)
    }
  }


  return (

<Router>
  <Header check={checkExpand} />
  <div className='app_page' >
  <Sidebar xpanded={expand} />
  <Routes>
     <Route path='/' element={<RecomandedVideos />} />
     <Route path='search/:searchTerm' element={<SearchPage />} />
     <Route path='video/:searchTerm' element={<Video/>} />

  </Routes> 
  </div>  

</Router>


     /* <Header />
     <div className='app_page' >
     <Sidebar />
     <RecomandedVideos />
     </div> */
  
    
  );
}

export default App;
