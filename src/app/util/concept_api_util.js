import axios from 'axios';

export const fetchConcept = (concept) => {
  return axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${concept}`)
    .then( res => {
      let result = [];

      if(res.data.drugGroup.conceptGroup !== null) {
        res.data.drugGroup.conceptGroup.forEach((type) => {
          if(type.conceptProperties){
            result = result.concat(type.conceptProperties);
          }
        });
      }
      return result;
    });
};

export const fetchAltConcept = (concept) => {
  let conceptID = concept.rxcui;
  let conceptGroups;
  let relatedConceptID = [];
  let SCD = [];
  let SBD = [];

  return axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui/${conceptID}/related.json?tty=IN`)
    .then( res => {
      conceptGroups = res.data.relatedGroup.conceptGroup;
      if(conceptGroups){
        conceptGroups.forEach((group) => {
          group.conceptProperties.forEach(property => {
            relatedConceptID = relatedConceptID.concat(property.rxcui);
          });
        });
      }
      return relatedConceptID;
    })
    .then(conceptIDs => {
      let promises = conceptIDs.map(id => {
        return axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui/${id}/related.json?tty=SCD+SBD`)
          .then(relatedConcept => {
            return relatedConcept.data.relatedGroup.conceptGroup;
          });
      });
      return Promise.all(promises);
    })
    .then(groups => {
      groups.forEach(group => {
        group.forEach(type => {
          if(type.tty === "SCD"){
            SCD = SCD.concat(type.conceptProperties);
          } else if(type.tty === "SBD"){
            SBD = SBD.concat(type.conceptProperties);
          }
        });
      });
      return [SCD, SBD];
    });
};
