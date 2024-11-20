import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import Accomodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import ConfirmButtonByFunction from './chapter_08/ConfirmButtonFunction';
import ToolBar from './chapter_09/Toolbar';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <CommentList /> */}
    {/* <Clock /> */}
    {/* <Library /> */}
    {/* <App /> */}
    {/* <Accomodate /> */}
    {/* <ConfirmButton /> */}
    {/* <ConfirmButtonByFunction /> */}
    <LandingPage />
    <AttendanceBook />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
