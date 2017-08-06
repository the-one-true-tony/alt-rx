import React from 'react';
import ReactDOM from 'react-dom';
import './app/css/index.css';
import Root from './app/root';
import configureStore from './app/store/store';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener("DOMContentLoaded", ()=> {
  let store = configureStore();
  let root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
  window.store = store;
  registerServiceWorker();

});
