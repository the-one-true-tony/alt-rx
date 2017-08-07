import {
  CONCEPT_LIST_START_LOADING,
  CONCEPT_LIST_STOP_LOADING,
  ALT_CONCEPT_LIST_START_LOADING,
  ALT_CONCEPT_LIST_STOP_LOADING
} from '../actions/loading_actions';

const _defaultState = {
  conceptList: false,
  altConceptList: false
};

const LoadingReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type){
    case CONCEPT_LIST_START_LOADING:
      newState = {
        ...state,
        conceptList: true
      }
      return newState;
    case ALT_CONCEPT_LIST_START_LOADING:
      newState = {
        ...state,
        altConceptList: true
      }
      return newState;
    case CONCEPT_LIST_STOP_LOADING:
      newState = {
        ...state,
        conceptList: false
      }
      return newState;
    case ALT_CONCEPT_LIST_STOP_LOADING:
      newState = {
        ...state,
        altConceptList: false
      }
      return newState;
    default:
      return state;
  }
};

export default LoadingReducer;
