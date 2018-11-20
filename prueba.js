const {Client} = require('virtuoso-sparql-client');
 
const DbPediaClient = new Client('http://dbpedia.org/sparql');
DbPediaClient.query('DESCRIBE <http://dbpedia.org/resource/Sardinia>')
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });