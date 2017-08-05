import { combineReducers } from 'redux';
import DrugsReducer from './drugs_reducer';


const RootReducer = combineReducers({
  drugs: DrugsReducer
});

export default RootReducer;
