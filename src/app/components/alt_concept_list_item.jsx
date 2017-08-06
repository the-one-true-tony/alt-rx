import React from 'react';

export const AltConceptListItem = (props) => {
  console.log(props);
  return(
  <div>
    <p>{ props.concept.name }</p>
    <p>{ props.concept.synonym }</p>
  </div>);
};
