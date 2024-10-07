import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Content from './Content';
import Orders from './Components/Orders';
import Services from './Components/Service';


function App() {
  return (
    <div>
     <div>
         <Navbar />
     </div>
    <div className="App" style={{backgroundColor:'ButtonShadow'}}>
    <BrowserRouter>
    <div className='col-auto'>
    <Sidebar/>
    </div>
    <div>
    <Routes>
     <Route path='/order' element={<Orders/>} />
      <Route path='/content' element={<Content/>} />
      <Route path='/service' element={<Services/>} />

    </Routes>
    </div>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
