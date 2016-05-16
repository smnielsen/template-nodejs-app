
describe('server', () => {
  var server;
  var fakeRoutes, fakeExpressConfigure, fakeExpress;
  beforeEach(() => {
    fakeRoutes = spy(function() {});
    fakeExpressConfigure = spy(function() {});
    fakeExpress = spy(function() {
      return {
        listen: function(port, callback) {}
      }
    });
    server = rewireModule('server', {
      expressConfigure: fakeExpressConfigure,
      routes: fakeRoutes,
      express: fakeExpress
    });
  });

  afterEach(() => {
    server.resetDependencies();
  });

  it("should have a runnable server", () => {
    expect(typeof(server)).to.equal('function');
  });
});
