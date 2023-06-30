import React from 'react';
import './App.css';
import NavBar from '../Features/NavBar/NavBar';
import Footer from '../Features/Footer/Footer';

function App(): JSX.Element {
  return (
    <div className="app">
      <NavBar />
      <div>!</div>
      <Footer />
    </div>
  );
}

export default App;
