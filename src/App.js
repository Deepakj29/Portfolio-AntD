import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Template from './pages/template/Template';
import {Home} from './pages/home/Home';
import {About}from './pages/about/About';
import {Project} from './pages/project/Project';
import {Skills} from './pages/skills/Skills';
import { Contact } from './pages/contact/Contact';


function App() {
  return (
    <>
   
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path='/'element={<Template/>}>
      <Route  index element={<Home/>}></Route>
      <Route exact path='/about'  element={<About/>}></Route>
      <Route exact path='/skills' element={<Skills/>}></Route>
      <Route exact path='/project'  element={<Project/>}></Route>
      <Route exact path='/Contact'element={<Contact/>}></Route>
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
   
    </>
  );
}

export default App;
