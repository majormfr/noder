import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom';
import './index.css';
import App from './App';
import {Imageupload} from './components/imageUpload';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Imageupload/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
