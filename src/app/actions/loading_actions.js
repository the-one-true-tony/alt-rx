export const CONCEPT_LIST_START_LOADING = 'CONCEPT_LIST_START_LOADING';
export const CONCEPT_LIST_STOP_LOADING = 'CONCEPT_LIST_STOP_LOADING';
export const ALT_CONCEPT_LIST_START_LOADING = 'ALT_CONCEPT_LIST_START_LOADING';
export const ALT_CONCEPT_LIST_STOP_LOADING = 'ALT_CONCEPT_LIST_STOP_LOADING';

export const conceptListStartLoading = () => ({
  type: CONCEPT_LIST_START_LOADING
});

export const conceptListStopLoading = () => ({
  type: CONCEPT_LIST_STOP_LOADING
});

export const altConceptListStartLoading = () => ({
  type: ALT_CONCEPT_LIST_START_LOADING
});

export const altConceptListStopLoading = () => ({
  type: ALT_CONCEPT_LIST_STOP_LOADING
});
