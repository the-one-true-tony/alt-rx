import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      concept: "",
      conceptNames: []
    };
    this.updateSearchField = this.updateSearchField.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
    axios.get(`https://rxnav.nlm.nih.gov/REST/displaynames`)
      .then(res => {
        this.setState({
          conceptNames: res.data.displayTermsList.term
        });
      });
  }

  handleKeyPress(e){
    let { concept } = this.state;
    if(e.keyCode === 13 && concept !== ""){
      this.props.loadConceptList();
      this.props.getConcept(concept);
    }
  }

  handleSearch(e){
    e.preventDefault();
    let { concept } = this.state;
    if (concept !== ""){
      this.props.loadConceptList();
      this.props.getConcept(concept);
    }
  }

  updateSearchField(e){
    const concept = e.currentTarget.value;
    this.setState({ concept });
  }

  render(){
    const { concept } = this.state;
    let errors;
    if(this.props.errors){
      errors = (
        <section>
          <span className="search-errors">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
            &nbsp;
            {this.props.errors}
          </span>
        </section>
      );
    }

    return(
      <section>
        { errors }
        <section>
          <input type="input"
            placeholder="Search for ingredient (eg alavert)"
            className="search-field"
            value={concept}
            onChange={this.updateSearchField} />

          <input type="button" value="Search"
            className="search-button"
            onClick={this.handleSearch}/>
        </section>

      </section>
    );
  }
}
