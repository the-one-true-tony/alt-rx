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
    .then(concept => dispatch(receiveConcept(concept)),
           errors => dispatch(receiveErrors(errors)))
);

export const fetchAltConcept = (target) => dispatch => (
  APIUtil.fetchAltConcept(target)
    .then(concept => dispatch(receiveAltConcept(concept)))
    .then(() => dispatch(selectConcept(target)))
);
