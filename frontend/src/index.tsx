import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App/App';
import reportWebVitals from './App/reportWebVitals';
import store from './Redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App
        course={{
          id: 0,
          courseImg: '',
          courseName: '',
          description: '',
        }}
      />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
