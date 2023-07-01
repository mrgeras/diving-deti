import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormLog from '../Features/Admin/FormLog';
import NavBar from '../Features/NavBar/NavBar';
import Footer from '../Features/Footer/Footer';
import Articles from '../Features/Articles/Articles';
import Main from '../Features/Main/Main';
import CoursesList from '../Features/Courses/CoursesList';
import About from '../Features/About/About';
import Error from '../Features/404/Error';
import { useAppDispatch } from '../Redux/store';
import { authCheckAdmin } from '../Redux/Reducers/AuthSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authCheckAdmin());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main />} />
          <Route path="/admin" element={<FormLog />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
