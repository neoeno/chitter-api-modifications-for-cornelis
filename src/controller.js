(function(exports) {
  function Controller() {
    this.peepsView = new PeepsView();
    this.peepsModel = new PeepsModel();
  }

  Controller.prototype.showPeeps = function () {
    var peeps = this.peepsModel.fetchPeeps();
    var wrappedPeeps = this.peepsView.wrapInHTML(peeps);
    document.getElementById('peeps-list').innerHTML = wrappedPeeps;
  };

  exports.Controller = Controller;
})(this);
