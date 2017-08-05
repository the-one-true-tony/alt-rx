import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <input placeholder="Search for ingredient (eg alavert) "/>
        <input type="button" value="Search" />
      </div>
    );
  }
}
