const fetch = require('node-fetch');

const getPage = (url) => (
  fetch(url)
    .then((data) => data.text())
    .then((result) => result)
    .catch((err) => { throw new Error(err) })
)

const parseString = str => {
  const map = {};
  str
    .toLowerCase()
    .trim()
    .split(/\s/)
    .forEach(each => {
      const word = each.replace(/[^0-9a-z]/g, '');
      const count = map[word];
      if (count) {
        map[word] = count + 1;
      } else {
        map[word] = 1;
      }
    });
  return map;
}

module.exports = {
  getPage,
  parseString,
}