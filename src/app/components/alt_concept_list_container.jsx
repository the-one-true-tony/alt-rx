import { connect } from 'react-redux';
import AltConceptList from './alt_concept_list';
// import { fetchAltConcept } from '../actions/concept_actions';

const mapStateToProps = ({ concept, loading }) => {
  return {
    altConceptList: concept.altConcept,
    loading: loading.altConceptList
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   getAltConcept: conceptID => dispatch(fetchAltConcept(conceptID)),
// });

export default connect(
  mapStateToProps,
  null
)(AltConceptList);
