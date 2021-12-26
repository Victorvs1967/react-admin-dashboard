import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </>
  );
}

export default App;
