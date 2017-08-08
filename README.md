# Alternative Medication

Alternative Medication, as it's name implies, lets users find alternatives to prescriptions they are currently using.  The app relies on RxNorm's API to lookup drug names, active ingredients and alternatives.  A live version of the site can be found at https://alt-rx.herokuapp.com/.

## Technologies

The app was created using Node.js, Javascript, React.js and Redux.js.  While Alternative Medication does not feature a backend of it's own, a sister site was created using Node.js, Express.js and Redis to create a fast autocomplete feature to help users search for drugs.

The autocompleting site takes all of drug names from RxNorm and creates saves all prefixes to its database. The site can be found at

Live: https://rxn-autofill.herokuapp.com/.
Github:
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

Autocompletion is set to return up to 10 matching results, but because Redis returns results asynchronously, a simple while loop will not work as it's searching.  To alleviate this problem, we promisified the server calls with bluebird

```
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
```

Then we could create a recursive looping function that will chain the promises until our desired outcome has been reached.

```
let searchLoop = (start, loop = true) => {
  if(results.length >= maxReturn || loop === false) return;
  client.zrangeAsync('autocomplete', start, start + sample - 1)
    .then(range => {
      ...
    })
    .then(() => {
      if(loop === true && results.length < maxReturn) {
        searchLoop(start);
      } else {
        return res.send(results);
      }
    });
  };
```
## Known issues

Alternative Medication and the autocomplete site were built using the free tier Heroku plan which can cause slow downs when the dynos are asleep.

Heroku's Redis service limits Redis caching to 25mb, which limits the autocomplete feature.  Testing this feature autocomplete only works for drugs from A to G.
