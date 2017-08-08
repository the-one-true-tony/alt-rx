import React, { Component } from 'react';

export default class ConceptListItem extends Component {
  render(){
    let { concept, selected, collapsed, selectConcept, updateSelected } = this.props;

    let klassName;
    // load concept list with different styling dependent on the whether
    // it has been selected or not.

    if(selected && selected === concept.rxcui){
      klassName =  "concept-item selected";
    } else if(selected && collapsed){
      klassName = "hidden";
    } else {
      klassName = "concept-item";
    }

    const update = () => {
      // the list item uses these callbacks to tell the list whether
      // it has been selected.
      selectConcept(concept);
      updateSelected(concept.rxcui);
    };

    return(
      <section onClick={update} className={klassName}>
        <section className="concept-item-icon">
          <i className={selected === concept.rxcui ? "fa fa-heart" : "hidden"}
            aria-hidden="true">
          </i>
        </section>
        <section className="concept-item-details">
          <span>Name: {concept.name}</span>
          <span>Synonym: {concept.synonym}</span>
        </section>
      </section>
    );
  }
}
