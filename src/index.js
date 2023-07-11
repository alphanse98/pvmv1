import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import Routing from './route/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routing/>
    </Provider>
  </React.StrictMode>
);


