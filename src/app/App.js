import React, { Component } from 'react';
import logo from './logo.svg';
import './css/app.css';
import SearchBar from './components/searchbar';
import DrugList from './components/drugList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-body">
          <SearchBar />
          <DrugList />
        </div>
      </div>
    );
  }
}

export default App;
