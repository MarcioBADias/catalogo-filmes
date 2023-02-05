import React from 'react';
import Global from './styles/global';
import Header from './components/header/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Global/>
    </>
  );
}

export default App;
