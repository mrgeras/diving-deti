import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormLog from '../Features/Admin/FormLog';
import NavBar from '../Features/NavBar/NavBar2';
import Footer from '../Features/Footer/Footer';
import Main from '../Features/Main/Main';
import CoursesList from '../Features/Courses/CoursesList';
import Error from '../Features/404/Error';
import Background from '../Features/Background/Background';
import { useAppDispatch } from '../Redux/store';
import { authCheckAdmin } from '../Redux/Reducers/AuthSlice';
import CourseAbout from '../Features/Courses/CourseAbout';
import MessageAbout from '../Features/Messages/MessageAbout';
import ArticlesList from '../Features/Articles/ArticlesList';
import ArticleAbout from '../Features/Articles/ArticleAbout';
import KonstruktItem from '../Features/Konstrukt/KonstruktItem';
import { Course } from '../Features/Courses/types/CoursesType';
import NewsList from '../Features/Messages/NewsList';
import Price from '../Features/Price/Price';
import AboutList from '../Features/About/AboutList';
import RequestsList from '../Features/Requests/RequestsList';

function App({ course }: { course: Course }): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authCheckAdmin());
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Main course={course} />} />
          <Route path="/admin" element={<FormLog />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/courses/:courseId" element={<CourseAbout />} />
          <Route path="/messages" element={<NewsList />} />
          <Route path="/messages/:messageId" element={<MessageAbout />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<ArticleAbout />} />
          <Route path="/admin/requests" element={<RequestsList />} />
          <Route path="/about" element={<AboutList />} />
          <Route path="/price" element={<Price />} />
          <Route path="/konstrukt" element={<KonstruktItem />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Background />
      <Footer />
    </div>
  );
}

export default App;
