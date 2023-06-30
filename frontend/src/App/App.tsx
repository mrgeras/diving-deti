import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormLog from '../Features/Admin/FormLog';
import NavBar from '../Features/NavBar/NavBar';
import Footer from '../Features/Footer/Footer';
import Articles from '../Features/Articles/Articles';
import Main from '../Features/Main/Main';
import Courses from '../Features/Courses/Courses';
import About from '../Features/About/About';
import Error from '../Features/404/Error';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />
          <Route path="/admin" element={<FormLog />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Error></Error>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
