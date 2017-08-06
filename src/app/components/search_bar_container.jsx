import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchConcept, receiveErrors } from '../actions/concept_actions';


const mapDispatchToProps = (dispatch) => ({
  getConcept: concept => dispatch(fetchConcept(concept)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
