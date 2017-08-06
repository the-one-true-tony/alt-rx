import { connect } from 'react-redux';
import AltConceptList from './alt_concept_list';
// import { fetchAltConcept } from '../actions/concept_actions';

const mapStateToProps = ({ ConceptReducer }) => {
  return {
    altConceptList: ConceptReducer.altConcept
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   getAltConcept: conceptID => dispatch(fetchAltConcept(conceptID)),
// });

export default connect(
  mapStateToProps,
  null
)(AltConceptList);
