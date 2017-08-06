import {
  RECEIVE_CONCEPT,
  RECEIVE_ALT_CONCEPT,
  RECEIVE_ERRORS,
  SELECT_CONCEPT
} from '../actions/concept_actions';

const _defaultState = {
  concept: {},
  selected_concept: {},
  altConcept: [[],[]]
};

const ConceptReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CONCEPT:
      newState = {
        ...state,
        concept: action.concept
      }
      return newState;
    case RECEIVE_ALT_CONCEPT:
      newState = {
        ...state,
        altConcept: action.concept
      }
      return newState;
    case RECEIVE_ERRORS:
      newState = {
        ...state,
        errors: action.errors
      }
      return newState;
    case SELECT_CONCEPT:
      newState = {
        ...state,
        selected_concept: action.concept
      }
      return newState;
    default:
      return state;
  }
}

export default ConceptReducer;
