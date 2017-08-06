import React, { Component } from 'react';
import ConceptListItem from './concept_list_item';

export default class ConceptList extends Component {
  constructor(props){
    super(props);

    // let selected = props.selected_concept;
    this.state = {
      selectedOption: ""
    };
    this.updateSelected = this.updateSelected.bind(this);
  }

  updateSelected(id){
    this.setState({
      selectedOption: id
    });
  }

  render(){
    let { conceptList, selectConcept } = this.props;
    let { selectedOption } = this.state;
    if(conceptList.length > 0){
      return(
        <ul>
          {conceptList.map(concept => (
            <ConceptListItem
              key={concept.rxcui}
              concept={concept}
              selectConcept={selectConcept}
              selected={selectedOption === concept.rxcui}
              updateSelected={this.updateSelected}
            />
          ))}
        </ul>
      );
    } else {
      return(
        <p>No matches found</p>
      );
    }

  }
}
