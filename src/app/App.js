import React, { Component } from 'react';
import logo from './logo.png';
import './css/app.css';
import SearchBarContainer from './components/search_bar_container';
import ConceptListContainer from './components/concept_list_container';
import AltConceptListContainer from './components/alt_concept_list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-body">
          <h2>Search for Similar Medication</h2>
          <SearchBarContainer />
          <ConceptListContainer />
          <AltConceptListContainer />
        </div>
      </div>
    );
  }
}

export default App;
