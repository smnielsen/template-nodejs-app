
describe('server', () => {
  var server;
  var fakeRoutes, fakeExpressConfigure;

  beforeEach(() => {
    fakeRoutes = spy(function() {});
    fakeExpressConfigure = spy(function() {});
    server = rewireModule('server', {
      expressConfigure: fakeExpressConfigure,
      routes: fakeRoutes
    });
  });

  afterEach(() => {
    server.resetDependencies();
  });

  it("should have run configure and routes methods on start", () => {
    expect(fakeRoutes.called).to.be.false;
    expect(fakeExpressConfigure.called).to.be.false;

    server();

    expect(fakeRoutes.calledOnce).to.be.true;
    expect(fakeExpressConfigure.calledOnce).to.be.true;
  });
});
