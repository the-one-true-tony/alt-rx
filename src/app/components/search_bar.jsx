import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      concept: ""
    };
    this.updateSearchField = this.updateSearchField.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e){
    // console.log(e.keyCode);
    let { concept } = this.state;
    if(e.keyCode === 13 && concept !== ""){
      this.props.getConcept(concept);
    }
  }

  handleSearch(e){
    e.preventDefault();
    let { concept } = this.state;
    if (concept !== ""){
      this.props.getConcept(concept);
    }
  }

  updateSearchField(e){
    const concept = e.currentTarget.value;
    this.setState({ concept });
  }

  render(){
    const { concept } = this.state;
    return(
      <div>
        <input type="input"
          placeholder="Search for ingredient (eg alavert)"
          className="search-field"
          value={concept}
          onChange={this.updateSearchField} />

        <input type="button" value="Search"
          className="search-button"
          onClick={this.handleSearch}/>
      </div>
    );
  }
}
