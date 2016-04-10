
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

  it("should have run configure and routes methods on start", () => {
    expect(fakeRoutes.called).to.be.false;
    expect(fakeExpressConfigure.called).to.be.false;
    expect(fakeExpress.called).to.be.false;

    server();

    expect(fakeRoutes.calledOnce).to.be.true;
    expect(fakeExpressConfigure.calledOnce).to.be.true;
    expect(fakeExpress.calledOnce).to.be.true;
  });
});
