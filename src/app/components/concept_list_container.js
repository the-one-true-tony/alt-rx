import { connect } from 'react-redux';
import ConceptList from './concept_list';
import { fetchAltConcept } from '../actions/concept_actions';
import { altConceptListStartLoading } from '../actions/loading_actions';

const mapStateToProps = ({ concept, loading }) => {
  return {
    conceptList: concept.concept,
    loading: loading.conceptList,
    errors: concept.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAltConcept: concept => dispatch(fetchAltConcept(concept)),
  loadAltConceptList: () => dispatch(altConceptListStartLoading())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConceptList);
