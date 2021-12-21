import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';


const rootElement =  document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
  <StoreProvider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </StoreProvider>
  </React.StrictMode>,
  
 rootElement
   
);

