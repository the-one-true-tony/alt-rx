import React, { Component } from 'react';
import ConceptListItem from './concept_list_item';

export default class ConceptList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedOption: "",     // which concept has been selected
      collapseList: false,    // state of the concept list
      searched: false         // has a search been conducted
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentWillReceiveProps(){
    this.setState({
      collapseList: false,
      searched: true
    });
  }
  updateSelected(id){
    this.props.loadAltConceptList();
    this.setState({
      selectedOption: id,
      collapseList: true
    });
  }

  toggleCollapse(){
    this.setState({
      collapseList: !this.state.collapseList
    });
  }

  render(){
    let { conceptList, getAltConcept, loading, errors } = this.props;
    let { selectedOption, collapseList, searched } = this.state;
    const collapseButton = (
      <span className="expand-button">
        <i className={ collapseList
            ? "fa fa-angle-double-down"
            : "fa fa-angle-double-up" }
          aria-hidden="true"
          onClick={this.toggleCollapse}></i>
      </span>
    );
    if(loading){
      return(
        <section>
          <i className="fa fa-spinner fa-3x loading"></i>
        </section>
      );
    } else if(conceptList.length > 1){
      return(
        <section>
          <section className="concept-list">
            <h2>Select a Reference Drug</h2>
            {conceptList.map(concept => (
              <ConceptListItem
                key={concept.rxcui}
                concept={concept}
                selectConcept={getAltConcept}
                selected={selectedOption}
                collapsed={collapseList}
                updateSelected={this.updateSelected}
              />
            ))}
          </section>
          { collapseButton }
        </section>
      );
    } else if(searched === true && errors === ""){
      return(
        <div className="list-message">No entries were listed</div>
      );
    }else if(searched === false){
      return(
        <div className="list-message">Lets go find some drugs</div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}
