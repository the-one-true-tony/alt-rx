import React, { Component } from 'react';
import { AltConceptListItem } from './alt_concept_list_item';

export default class AltConceptList extends Component {

  render(){
    let { altConceptList } = this.props;
    let altSCD, altSBD;

    if(altConceptList[0].length > 0){
      altSCD = (
        <section className="alt-list">
          Brand Name Drugs
          {altConceptList[0].map(concept => (
            <AltConceptListItem
              key={concept.rxcui}
              concept={concept} />
          ))}
        </section>
      );
    }
    if(altConceptList[1].length > 0){
      altSBD = (
        <section className="alt-list">
          Generic Drugs
          {altConceptList[0].map(concept => (
            <AltConceptListItem
              key={concept.rxcui}
              concept={concept} />
          ))}
        </section>
      );
    }

    return(
      <section className="alt-lists">
        { altSCD }
        { altSBD }
      </section>
    );
  }
}
