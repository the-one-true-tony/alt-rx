import {
  conceptListStopLoading,
  altConceptListStopLoading
} from './loading_actions';

import * as APIUtil from '../util/concept_api_util';
export const RECEIVE_CONCEPT = 'RECEIVE_CONCEPT';
export const RECEIVE_ALT_CONCEPT = 'RECEIVE_ALT_CONCEPT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SELECT_CONCEPT = 'SELECT_CONCEPT';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveConcept = (concept) => ({
  type: RECEIVE_CONCEPT,
  concept
});

export const receiveAltConcept = (concept) => ({
  type: RECEIVE_ALT_CONCEPT,
  concept
});

export const selectConcept = concept => ({
  type: SELECT_CONCEPT,
  concept
});

export const fetchConcept = (target) => dispatch => (
  APIUtil.fetchConcept(target)
    // it the target is found clear errors and return the concept list.
    .then(concept => dispatch(receiveConcept(concept)))
    .then(() => dispatch(receiveErrors("")))
    .then(() => dispatch(conceptListStopLoading()))
    .then(() => dispatch(receiveAltConcept([[],[]])))
    .catch(errors => {
      // if there are any errors clear the the lists
      dispatch(receiveErrors("No matches found"));
      dispatch(conceptListStopLoading());
      dispatch(receiveAltConcept([[],[]]));
      dispatch(receiveConcept({}));
    })
);

export const fetchAltConcept = (target) => dispatch => (
  APIUtil.fetchAltConcept(target)
    // get the alternative medication list.
    .then(concept => dispatch(receiveAltConcept(concept)))
    .then(() => dispatch(altConceptListStopLoading()))
    .then(() => dispatch(selectConcept(target)))
);
