/*Paginas*/
import Home from './pagina/home';
import Campanha from './pagina/campanha';
/*React*/
import React from 'react';
import {Routes, Route} from 'react-router-dom'
/*Estilo*/
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/campanha' element={<Campanha/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
