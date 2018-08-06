describe('Controller', function() {
  describe('.showPeeps', function () {
    it('injects peeps into the page',() => {
      var mockElement = { innerHTML: ""};
      var mockDocument = { getElementById: function () { return mockElement; } };
      var controller = new Controller();
      controller.showPeeps(mockDocument);
      expect(mockElement.innerHTML).toContain("<div>");
    });
  });
});
