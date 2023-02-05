import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Movie from './pages/movie';
import Search from './pages/search';

const root = createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Movie/>}/>
        <Route path='Search' element={<Search/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

