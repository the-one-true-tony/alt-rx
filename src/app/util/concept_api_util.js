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

export const fetchAltConcept = (conceptID) => {
  return axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui/${conceptID}/related.json?tty=IN`)
    // .then( res => (res.data));
};
