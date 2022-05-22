import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CustomerWrapper from './CustomerWrapper';
import Home from './Home';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                brand="Square Customer Creator"
                logoUrl="https://1000logos.net/wp-content/uploads/2019/05/Square.jpg"
                // logoUrl="https://image.shutterstock.com/image-vector/fake-counterfeit-copy-labeled-original-600w-1108512809.jpg"
              />
            }
          />
          <Route path="/customers" element={<CustomerWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
