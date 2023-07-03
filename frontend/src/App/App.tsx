import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormLog from '../Features/Admin/FormLog';
import NavBar from '../Features/NavBar/NavBar';
// import Footer from '../Features/Footer/Footer';
import Main from '../Features/Main/Main';
import CoursesList from '../Features/Courses/CoursesList';
import About from '../Features/About/About';
import Error from '../Features/404/Error';
import Background from '../Features/Background/Background';
import { useAppDispatch } from '../Redux/store';
import { authCheckAdmin } from '../Redux/Reducers/AuthSlice';
import CourseAbout from '../Features/Courses/CourseAbout';
import MessagesList from '../Features/Messages/MessagesList';
import MessageAbout from '../Features/Messages/MessageAbout';
import ArticlesList from '../Features/Articles/ArticlesList';
import ArticleAbout from '../Features/Articles/ArticleAbout';

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
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:courseId" element={<CourseAbout />} />
          <Route path="/messages" element={<MessagesList />} />
          <Route
            path="/messages/:messageId"
            element={<MessageAbout />}
          />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticleAbout />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Background />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
