function PeepsModel () {}

PeepsModel.prototype.fetchPeeps = function() {
  return fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json());
};
