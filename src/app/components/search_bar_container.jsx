import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchConcept } from '../actions/concept_actions';
import { conceptListStartLoading } from '../actions/loading_actions';

const mapStateToProps = state => ({
  errors: state.concept.errors
});

const mapDispatchToProps = (dispatch) => ({
  getConcept: concept => dispatch(fetchConcept(concept)),
  loadConceptList: () => dispatch(conceptListStartLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
