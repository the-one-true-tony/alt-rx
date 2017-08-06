import React, { Component } from 'react';

export default class ConceptListItem extends Component {
  render(){
    let { concept, selected, selectConcept, updateSelected } = this.props;

    const update = () => {
      selectConcept(concept);
      updateSelected(concept.rxcui);
    };

    return(
      <section onClick={update}
        className={selected ? "selected-concept-item " : "concept-item"}>
        <p>ID: {concept.rxcui}</p>
        <p>Name: {concept.name}</p>
        <p>Synonym: {concept.synonym}</p>
      </section>
    );
  }
}
