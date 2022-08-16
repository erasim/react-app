import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import CustomDate from './Date';
import reportWebVitals from './reportWebVitals';
import Fatchapi from './Fatchapi';
import StopWatch from './StopWatch/StopWatch';
import Crud from './react-crud-app/Crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <CustomDate />
      <Counter />
      <Fatchapi />
      <StopWatch/>
      <Crud/>
    </React.Fragment>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
