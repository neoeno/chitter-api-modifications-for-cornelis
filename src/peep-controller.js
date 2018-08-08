(function(exports) {
  function Controller(doc) {
    this.peepsView = new PeepsView();
    this.peepsModel = new PeepsModel();
    this.doc = doc;
  }

  Controller.prototype.showPeepList = function () {
    return this.peepsModel.fetchPeeps()
      .then(response => response.json())
      .then(peeps => this.peepsView.wrapInHTML(peeps))
      .then(wrappedPeeps => {
        this.doc.getElementById('peep-list').innerHTML = wrappedPeeps
      });
  };

  exports.Controller = Controller;
})(this);
