import React, { Component } from 'react';
import { AltConceptListItem } from './alt_concept_list_item';

export default class AltConceptList extends Component {

  render(){
    let { altConceptList, loading } = this.props;
    let altSCD, altSBD, altHeader;

    if(altConceptList[0].length > 0){
      altSCD = (
        <section className="alt-list">
          <h2>Brand Name Drugs</h2>
          {altConceptList[0].map((concept, i) => (
            <AltConceptListItem
              key={i + concept.rxcui}
              concept={concept} />
          ))}
        </section>
      );
    }
    if(altConceptList[1].length > 0){
      altSBD = (
        <section className="alt-list">
          <h2>Generic Drugs</h2>
          {altConceptList[1].map((concept, i) => (
            <AltConceptListItem
              key={i + concept.rxcui}
              concept={concept} />
          ))}
        </section>
      );
    }

    if(loading){
      altHeader = (
        <section>
          <i className="fa fa-refresh fa-3x loading"></i>
        </section>
      );
    }else if(altConceptList[1].length > 0 || altConceptList[0].length > 0 ) {
      altHeader = (
        <h2>Similar Drugs:</h2>
      );
    }

    return(
      <section>
        { altHeader }
        <section className="alt-lists">
          { altSCD }
          { altSBD }
        </section>

      </section>
    );
  }
}
