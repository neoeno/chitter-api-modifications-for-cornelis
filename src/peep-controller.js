(function(exports) {
  function Controller() {
    this.peepsView = new PeepsView();
    this.peepsModel = new PeepsModel();
  }

  Controller.prototype.showPeepList = function () {
    this.peepsModel.fetchPeeps()
      .then(response => response.json())
      .then(peeps => this.peepsView.wrapInHTML(peeps))
      .then(wrappedPeeps => document.getElementById('peep-list').innerHTML = wrappedPeeps);
  };

  exports.Controller = Controller;
})(this);
