import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      concept: "",
      autocompleteOnFocus: false,
      autocomplete: [],
      conceptNames: []
    };
    this.updateSearchField = this.updateSearchField.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.autoSearch = this.autoSearch.bind(this);
  }

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e){
    let { concept } = this.state;

    if(e.keyCode === 13 && concept !== ""){
      this.props.loadConceptList();
      this.props.getConcept(concept);
      this.setState({autocompleteOnFocus:false});
    }
  }

  handleSearch(e){
    if(e) e.preventDefault();
    let { concept } = this.state;
    if (concept !== ""){
      this.props.loadConceptList();
      this.props.getConcept(concept);
      this.setState({autocompleteOnFocus:false});
    }
  }

  autoSearch(concept){
    this.props.loadConceptList();
    this.props.getConcept(concept);
    this.setState({autocompleteOnFocus:false});
  }

  updateSearchField(event,type){
    let concept;

    if(type === "typing"){
      concept = event.currentTarget.value;
      axios.get(`https://rxn-autofill.herokuapp.com/api?name=${concept}`)
        .then(conceptList => {
          this.setState({
            autocomplete: conceptList.data
          });
        });
      this.setState({ concept });

    } else if (type === "autocomplete"){
      concept = event.currentTarget.innerHTML;
      this.setState({ concept });
      this.autoSearch(concept);
    }
  }

  render(){
    const { concept, autocomplete, autocompleteOnFocus } = this.state;
    let errors, autoCompleteList;
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
    if(autocomplete.length > 0){
      autoCompleteList = (
        <section
          className={autocompleteOnFocus ? "autocomplete-list" : "hidden"}>
          {autocomplete.map((item, index) => (
            <section key={index}
              className="autocomplete-list-item"
              onClick={(e)=> this.updateSearchField(e,"autocomplete")}
            >
              {item}
            </section>
          ))}
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
            onFocus={()=>{this.setState({autocompleteOnFocus:true});}}
            onBlur={()=>{
              setTimeout(()=>{
                this.setState({autocompleteOnFocus:false});
              }, 200);
            }}
            onChange={(e)=>this.updateSearchField(e,"typing")} />

          <input type="button" value="Search"
            className="search-button"
            onClick={this.handleSearch}/>
        </section>
        { autoCompleteList }

      </section>
    );
  }
}
