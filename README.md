# Alternative Medication

Alternative Medication, as it's name implies, lets users find alternatives to prescriptions they are currently using.  The app relies on RxNorm's API to lookup drug names, active ingredients and alternatives.  A live version of the site can be found at https://alt-rx.herokuapp.com/.

## Technologies

The app was created using Node.js, Javascript, React.js and Redux.js.  While Alternative Medication does not feature a backend of it's own, a sister site was created using Node.js, Express.js and Redis to create a fast autocomplete feature to help users search for drugs.

The autocompleting site takes all of drug names from RxNorm and creates saves all prefixes to its database. The site can be found at https://rxn-autofill.herokuapp.com/.

Calls to it's API can be made by querying the name of the drug like so:

https://rxn-autofill.herokuapp.com/api?name=alavert

## Challenges

When searching for a drug we create a promise that often times returns a group of multiple ID's, each needing it's own promise call to return the alternative drug. This creates a nested looping pattern.  To keep things in sync we use Promise.all.

```
.then(conceptIDs => {
  let promises = conceptIDs.map(id => {
    return axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui/${id}/related.json?tty=SCD+SBD`)
      .then(relatedConcept => {
        return relatedConcept.data.relatedGroup.conceptGroup;
      });
  });
  return Promise.all(promises);
```
