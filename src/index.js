import React from 'react';
import ReactDOM from 'react-dom';
import './app/css/index.css';
import App from './app/App';
import configureStore from './app/store/store';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener("DOMContentLoaded", ()=> {
  let store = configureStore();
  let root = document.getElementById('root');
  ReactDOM.render(<App store={ store }/>, root);
  window.store = store;
  registerServiceWorker();

});
