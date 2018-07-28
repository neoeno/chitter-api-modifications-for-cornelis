(function(exports) {
  function Controller() {
    this.peepsView = new PeepsView();
    this.peepsModel = new PeepsModel();
  }

  Controller.prototype.showPeeps = function (document) {
    fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then( (peepsJSON) => {
        return peepsJSON.json();
      })
      .then( (peeps) => {
        return this.peepsView.wrapInHTML(peeps);
      })
      .then( (wrappedPeeps) => {
        document.getElementById('peeps-list').innerHTML = wrappedPeeps;
      });
  };

  exports.Controller = Controller;
})(this);
