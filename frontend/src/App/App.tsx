import React from 'react';
import './App.css';
import FormLog from '../Features/Admin/FormLog';
import NavBar from '../Features/NavBar/NavBar';
import Footer from '../Features/Footer/Footer';

function App(): JSX.Element {
  return (
    <div className="app">
      <NavBar />
      <FormLog />
      <Footer />
    </div>
  );
}

export default App;
