import { connect } from 'react-redux';
import ConceptList from './concept_list';
import { fetchAltConcept, selectConcept } from '../actions/concept_actions';

const mapStateToProps = ({ ConceptReducer }) => {
  return {
    conceptList: ConceptReducer.concept
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAltConcept: conceptID => dispatch(fetchAltConcept(conceptID)),
  selectConcept: concept => dispatch(selectConcept(concept))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConceptList);
