function PeepsModel () {}

PeepsModel.prototype.fetchPeeps = function () {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(function(peepsJSON) {
      return peepsJSON.json();
    });
};
