const fetch = require('node-fetch');

const randomFact = facts =>
  facts.all[Math.round(Math.random() * (facts.all.length - 1))].text;

fetch('https://cat-fact.herokuapp.com/facts') // returns promise
  .then(res => res.json()) // returns promise
  .then(facts => console.log(randomFact(facts)));
