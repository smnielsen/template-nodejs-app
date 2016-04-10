import rewireBabel from 'babel-rewire-wrapper';

global.chai   = require('chai')
global.expect = chai.expect
global.assert = chai.assert

global.sinon  = require('sinon')
global.spy    = sinon.spy
global.stub   = sinon.stub
global.match  = sinon.match
global.mock   = sinon.mock

chai.use(require('sinon-chai'))
chai.should()

var path = require('path');
global.rewireModule = function(relPath, mocks) {
  var instance = require(path.relative(__dirname, 'app/' + relPath));
  var rewirer, resetDependencies = () => {};

  if(instance) {
    mocks = mocks || {};
    rewirer = rewireBabel().use(instance, mocks);
    rewirer.rewire();
    var defaultMethods = {};
    for(var key in mocks) {
      if(mocks.hasOwnProperty(key) && instance.hasOwnProperty(key)) {
        console.log('Mocking: ' + key);
        defaultMethods[key] = instance.__get__(key);
        instance.__set__(key, mocks[key]);
      }
    }
    resetDependencies = () => {
      rewirer.resetDependencies;
      for(var key in defaultMethods) {
        if(mocks.hasOwnProperty(key) && instance.hasOwnProperty(key)) {
          console.log('Resetting mock: ' + key);
          instance.__set__(key, defaultMethods[key]);
        }
      }
    };
    if(instance.default) {
      instance = instance.default;
    }
  } else {
    console.warn('rewireModule, no instance found at=' + relPath);
  }

  instance.resetDependencies = resetDependencies;
  return instance;
}
