describe('Controller', function() {
  describe('.showPeeps', function () {
    it('injects peeps into the page',(done) => {
      var mockElement = { innerHTML: "" };
      var mockDocument = { getElementById: function () { return mockElement; } };
      var controller = new Controller(mockDocument);
      controller.showPeepList().then(() => {
        expect(mockElement.innerHTML).toContain("<div>");
        done();
      });
    });
  });
});
