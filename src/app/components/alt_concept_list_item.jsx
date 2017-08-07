import React from 'react';

export const AltConceptListItem = (props) => {
  return(
  <div className="alt-list-item">
    <p>{ props.concept.name }</p>
  </div>);
};
