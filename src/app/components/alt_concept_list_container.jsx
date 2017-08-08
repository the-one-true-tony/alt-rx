import { connect } from 'react-redux';
import AltConceptList from './alt_concept_list';
// import { fetchAltConcept } from '../actions/concept_actions';

const mapStateToProps = ({ concept, loading }) => (
  {
    altConceptList: concept.altConcept,
    loading: loading.altConceptList
  }
);

export default connect(
  mapStateToProps,
  null
)(AltConceptList);
