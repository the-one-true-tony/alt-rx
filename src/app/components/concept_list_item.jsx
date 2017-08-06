import React, { Component } from 'react';

export default class ConceptListItem extends Component {
  render(){
    let { concept, selected, collapsed, selectConcept, updateSelected } = this.props;

    let klassName;

    if(selected && selected === concept.rxcui){
      klassName =  "selected-concept-item";
    } else if(selected && collapsed){
      klassName = "hidden";
    } else {
      klassName = "concept-item";
    }

    const update = () => {
      selectConcept(concept);
      updateSelected(concept.rxcui);
    };

    return(
      <section onClick={update} className={klassName}>
        <p>ID: {concept.rxcui}</p>
        <p>Name: {concept.name}</p>
        <p>Synonym: {concept.synonym}</p>
      </section>
    );
  }
}
