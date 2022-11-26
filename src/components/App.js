import React from 'react'
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import Id from './Id';

const App = () => {
  //Write your code here
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Id/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App;
