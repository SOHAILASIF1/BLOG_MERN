import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Signup from './components/singnup/Signup';
import Header from './components/Header';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>


      <Route path='/login' element={<Login/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App
