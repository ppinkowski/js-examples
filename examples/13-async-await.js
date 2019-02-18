const fetch = require('node-fetch');

const randomFact = facts =>
  facts.all[Math.round(Math.random() * (facts.all.length - 1))].text;

(async function() {
  const response = await fetch('https://cat-fact.herokuapp.com/facts');
  const facts = await response.json();
  console.log(randomFact(facts));
})();
