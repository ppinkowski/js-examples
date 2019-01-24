window.onload = () => {
  const script = document.createElement('script');
  script.src = './exercise1.js';
  document.head.appendChild(script);
};

window.clearGroups = () => {
  const results = document.getElementById('results');
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
};

window.addGroup = (header, entries) => {
  const group = document.createElement('div');
  group.className = 'group';
  group.innerHTML = `
    <h2>${header}</h2>
    ${entries.join('')}
  `;
  document.getElementById('results').appendChild(group);
};

window.createEntry = (name, imgSrc, description) => `
  <div class="item">
    <h3>${name}</h3>
    <img src="${imgSrc}">
    <p>${description}</p>
  </div>
`;
