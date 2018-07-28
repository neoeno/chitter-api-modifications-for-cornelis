describe('PeepsModel', function() {
  describe('.fetchPeeps', function () {
    it('fetches peeps data from API', function() {
      var peepsView = new PeepsView();
      var peeps = [{"body": "test one"}, {"body": "test two"}];
      expect(peepsView.wrapInHTML(peeps)).toEqual(
        "<ul><li><div>test one</div></li><li><div>test two</div></li></ul>"
      );
    });
  });
});
