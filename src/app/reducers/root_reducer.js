import { combineReducers } from 'redux';
import ConceptReducer from './concept_reducer';
import LoadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  concept: ConceptReducer,
  loading: LoadingReducer
});

export default RootReducer;
