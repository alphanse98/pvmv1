import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import HomePage from './pages/HomePage';
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HomePage/>
    </Provider>
  </React.StrictMode>
);


