import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Belconnen from './nav/Belconnen'
import Canberra from './nav/Canberra'
import Gungahlin from './nav/Gungahlin'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App value="CANBERRA"/>} />
      <Route path="GREATERBELCONNEN" element={<Belconnen value="GREATERBELCONNEN"/>} />
      <Route path="GREATERGUNGAHLIN" element={<App value="GREATERGUNGAHLIN"/>} />
      <Route path="INNERNORTH" element={<App value="INNERNORTH"/>} />
      <Route path="INNERSOUTH" element={<App value="INNERSOUTH"/>} />
      <Route path="WESTONCREEK" element={<App value="WESTONCREEK"/>} />
      <Route path="GREATERGUNGAHLIN" element={<App value="MOLONGLODISTRICT"/>} />
      <Route path="WODENCREEK" element={<App value="WODENCREEK"/>} />
      <Route path="TUGGERANONGCREEK" element={<App value="TUGGERANONGCREEK"/>} />
    </Routes>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
